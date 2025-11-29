// manufacturer_tools/gen_qr.js
import fs from 'fs';
import QRCode from 'qrcode';
import { signPayload } from './sign_payload.js';

async function gen() {
  const payload = {
    product_id: "PROD-12345",
    serial: "SN-0000123456",
    batch: "BATCH-2025-11",
    issued_at: new Date().toISOString()
  };
  const token = signPayload(payload);

  // bundle token as QR content (could be "token:xxx")
  const data = token;
  await QRCode.toFile('./keys/sample_qr.png', data);
  console.log('saved sample_qr.png');
}

gen();
