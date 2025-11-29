# fl_project/dataset.py
from torchvision import transforms, datasets
from torch.utils.data import DataLoader, random_split

def get_transforms(train=True, size=224):
    if train:
        return transforms.Compose([
            transforms.Resize((size,size)),
            transforms.RandomHorizontalFlip(),
            transforms.ToTensor(),
            transforms.Normalize(mean=[0.485,0.456,0.406],
                                 std=[0.229,0.224,0.225])
        ])
    return transforms.Compose([
        transforms.Resize((size,size)),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485,0.456,0.406],
                             std=[0.229,0.224,0.225])
    ])

def get_dataloader(data_dir, batch_size=16, train=True, size=224, val_split=0.1):
    dataset = datasets.ImageFolder(data_dir, transform=get_transforms(train, size))
    if train and val_split>0:
        val_len = int(len(dataset)*val_split)
        train_len = len(dataset)-val_len
        train_ds, val_ds = random_split(dataset, [train_len, val_len])
        train_dl = DataLoader(train_ds, batch_size=batch_size, shuffle=True, num_workers=2)
        val_dl = DataLoader(val_ds, batch_size=batch_size, shuffle=False, num_workers=2)
        return train_dl, val_dl
    dl = DataLoader(dataset, batch_size=batch_size, shuffle=train, num_workers=2)
    return dl
