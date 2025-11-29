# fl_project/server.py
import argparse
import flwr as fl
from save_strategy import SaveStrategy

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--rounds", type=int, default=3)
    parser.add_argument("--num_clients", type=int, default=2)
    parser.add_argument("--host", type=str, default="0.0.0.0")
    parser.add_argument("--port", type=int, default=8080)
    args = parser.parse_args()

    strategy = SaveStrategy(
        fraction_fit=1.0,
        fraction_eval=1.0,
        min_fit_clients=args.num_clients,
        min_eval_clients=args.num_clients,
        min_available_clients=args.num_clients,
    )

    fl.server.start_server(
        server_address=f"{args.host}:{args.port}",
        config=fl.server.ServerConfig(num_rounds=args.rounds),
        strategy=strategy,
    )

if __name__ == "__main__":
    main()
