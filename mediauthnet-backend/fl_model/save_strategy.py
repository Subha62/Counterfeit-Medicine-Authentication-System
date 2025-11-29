# fl_project/save_strategy.py
import flwr as fl
import numpy as np

class SaveStrategy(fl.server.strategy.FedAvg):
    def aggregate_fit(self, rnd, results, failures):
        aggregated = super().aggregate_fit(rnd, results, failures)
        if aggregated is not None:
            # parameters -> ndarrays
            ndarrays = fl.common.parameters_to_ndarrays(aggregated.parameters)
            np.save(f"./global_params_round{rnd}.npy", ndarrays, allow_pickle=True)
            print(f"[server] Saved global_params_round{rnd}.npy")
        return aggregated
