import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Razorpay from 'razorpay';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });
dotenv.config();

const key_id = process.env.RAZORPAY_KEY_ID || process.env.RAZORPAY_API_KEY;
const key_secret = process.env.RAZORPAY_KEY_SECRET || process.env.RAZORPAY_API_SECRET;

if (!key_id || !key_secret) {
  console.error('[Config Error] FATAL: Razorpay Key ID or Key Secret is missing in environment variables.');
}

const razorpay = new Razorpay({
  key_id: key_id || '',
  key_secret: key_secret || '',
});

export const razorpayKeyId = key_id || '';
export const razorpayKeySecret = key_secret || '';

export default razorpay;