# inference_service/inference_server.py
from flask import Flask, request, jsonify
from model import get_model
from dataset import get_transforms
from utils import set_parameters
import numpy as np
import torch
from PIL import Image
import io
import os
import sys

MODEL_NPY = os.environ.get("GLOBAL_PARAMS", "./fl_project/global_params_round1.npy")
DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

app = Flask(__name__)

# load model
model = get_model(num_classes=2, device=DEVICE)
params = np.load(MODEL_NPY, allow_pickle=True)
set_parameters(model, params)
transform = get_transforms(train=False, size=224)

labels = ['genuine','counterfeit']

@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error":"no file"}), 400
    file = request.files["file"]
    img = Image.open(file.stream).convert("RGB")
    x = transform(img).unsqueeze(0).to(DEVICE)
    model.eval()
    with torch.no_grad():
        out = model(x)
        probs = torch.softmax(out, dim=1)[0].cpu().numpy()
        idx = int(probs.argmax())
    return jsonify({"label": labels[idx], "score": float(probs[idx])})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=9000)
