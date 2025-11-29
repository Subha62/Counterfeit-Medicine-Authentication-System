# fl_project/utils.py
import torch

def get_parameters(model):
    # list of numpy arrays for all tensors in state_dict
    return [val.cpu().numpy() for _, val in model.state_dict().items()]

def set_parameters(model, parameters):
    keys = list(model.state_dict().keys())
    state_dict = {}
    for k, arr in zip(keys, parameters):
        state_dict[k] = torch.tensor(arr)
    model.load_state_dict(state_dict, strict=True)

def evaluate_model(model, dataloader, device='cpu'):
    model.eval()
    correct = 0
    total = 0
    with torch.no_grad():
        for x,y in dataloader:
            x = x.to(device); y = y.to(device)
            out = model(x)
            preds = out.argmax(dim=1)
            correct += (preds==y).sum().item()
            total += y.size(0)
    return {"accuracy": correct/total if total>0 else 0.0}
