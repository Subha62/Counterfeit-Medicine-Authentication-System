// manufacturer_tools/sign_payload.js
import fs from 'fs';
import jwt from 'jsonwebtoken';

const privateKey = fs.readFileSync('./keys/private.pem');

export function signPayload(payload) {
  // produce RS256 JWT (compact)
  return jwt.sign(payload, privateKey, { algorithm: 'RS256', expiresIn: '30d' });
}

// run example
if (require.main === module) {
  const payload = {
    product_id: "PROD-12345",
    serial: "SN-0000123456",
    batch: "BATCH-2025-11",
    issued_at: new Date().toISOString()
  };
  console.log(signPayload(payload));
}
