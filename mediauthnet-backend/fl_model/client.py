# fl_project/client.py
import argparse
import flwr as fl
import torch
import torch.nn as nn
import torch.optim as optim
from model import get_model
from dataset import get_dataloader
from utils import get_parameters, set_parameters, evaluate_model

DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

class FlowerClient(fl.client.NumPyClient):
    def __init__(self, cid, model, train_loader, val_loader):
        self.cid = cid
        self.model = model
        self.train_loader = train_loader
        self.val_loader = val_loader
        self.criterion = nn.CrossEntropyLoss()
        self.optimizer = optim.Adam(self.model.parameters(), lr=1e-4)

    def get_parameters(self):
        return get_parameters(self.model)

    def fit(self, parameters, config):
        set_parameters(self.model, parameters)
        self.model.train()
        epochs = int(config.get('epochs', 1))
        for _ in range(epochs):
            for x,y in self.train_loader:
                x = x.to(DEVICE); y = y.to(DEVICE)
                self.optimizer.zero_grad()
                out = self.model(x)
                loss = self.criterion(out, y)
                loss.backward(); self.optimizer.step()
        return get_parameters(self.model), len(self.train_loader.dataset), {}

    def evaluate(self, parameters, config):
        set_parameters(self.model, parameters)
        metrics = evaluate_model(self.model, self.val_loader, device=DEVICE)
        loss = 1.0 - metrics['accuracy']
        return float(loss), len(self.val_loader.dataset), metrics

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--cid", required=True)
    parser.add_argument("--data-dir", required=True)
    parser.add_argument("--server-address", default="localhost:8080")
    parser.add_argument("--epochs", type=int, default=1)
    args = parser.parse_args()

    model = get_model(num_classes=2, device=DEVICE)
    train_dl, val_dl = get_dataloader(args.data_dir, batch_size=8, train=True, val_split=0.15)

    client = FlowerClient(args.cid, model, train_dl, val_dl)
    fl.client.start_numpy_client(server_address=args.server_address, client=client)

if __name__ == '__main__':
    main()
