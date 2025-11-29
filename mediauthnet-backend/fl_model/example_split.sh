#!/bin/bash
FULL=$1
N=$2
OUT=$3
python - <<PY
import os, shutil, sys, random
from glob import glob
FULL=sys.argv[1]; N=int(sys.argv[2]); OUT=sys.argv[3]
classes = [d for d in os.listdir(FULL) if os.path.isdir(os.path.join(FULL,d))]
os.makedirs(OUT, exist_ok=True)
for i in range(N):
    os.makedirs(os.path.join(OUT,f'client{i}'), exist_ok=True)
for cls in classes:
    files = glob(os.path.join(FULL,cls,'*'))
    random.shuffle(files)
    for idx,f in enumerate(files):
        dest = os.path.join(OUT,f'client{idx % N}', cls)
        os.makedirs(dest, exist_ok=True)
        shutil.copy(f, dest)
print('Done split')
PY
