##🎯 Counterfeit Medicine Authentication System
AI-Powered | Federated Learning | QR Verification | Secure Supply Chain

This project provides a real-time medicine authentication system that uses Federated Learning, QR identity tokens, and role-based product lifecycle tracking to detect counterfeit medicines and secure the pharmaceutical supply chain.



#📖 Overview

Counterfeit medicines are a global threat, causing health hazards, financial loss, and supply chain corruption.

This system solves the problem by combining:

🧠 Federated Learning (FL):
Learns from distributed devices without collecting raw images.

🔐 Secure QR Identity Tokens:
Every medicine bottle/strip gets a unique QR token linked to FL predictions.

📍 Location & Metadata Tracking:
Logs movement from Manufacturer → Supplier → Retailer → Customer.

🎭 Role-Based Authentication:
Different dashboards for Manufacturer, Supplier, Retailer, and Admin.




#🚀 Key Features
✔ Federated Learning (FL)

No central dataset required

Each manufacturer trains on its own data

Only model weight updates are sent to server

Enhances privacy & accuracy

✔ QR-Based Medicine Verification

Every product is assigned a unique QR token

QR is scanned to verify:

Authentic vs Counterfeit

Origin information

Expiry, batch, and metadata

✔ Product Journey Tracking

Tracks:

Manufacturer identity

Batch and serial number

Sale state

GPS-based movement logs

Metadata per user role

✔ Secure Authentication

OTP email verification

JWT-based login

Role-based protected APIs


##⚙️ Setup Instructions
 # Backend setup for run the code 

 cd "D:\Counterfit Medicine Authentication System\Counterfeit-Medicine-Identification-System-Using-Federated Learning"
>> 
PS D:\Counterfit Medicine Authentication System\Counterfeit-Medicine-Identification-System-Using-Federated Learning> cd mediauthnet-backend                                
PS D:\Counterfit Medicine Authentication System\Counterfeit-Medicine-Identification-System-Using-Federated Learning\mediauthnet-backend>
>> npm run dev

# frontend setup for run the code 

 cd "D:\Counterfit Medicine Authentication System\Counterfeit-Medicine-Identification-System-Using-Federated Learning"
>> 
PS D:\Counterfit Medicine Authentication System\Counterfeit-Medicine-Identification-System-Using-Federated Learning>  cd mediauthnet-frontend
>> PS D:\Counterfit Medicine Authentication System\Counterfeit-Medicine-Identification-System-Using-Federated Learning\mediauthnet-frontend>
>> npm start

