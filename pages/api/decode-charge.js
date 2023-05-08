import { getZBD } from '@/services/zbd';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Get zbd client
    const { zbd } = getZBD(res);

    try {
      // Deconstruct body
      const { invoice } = JSON.parse(req.body);

      // Construct payload
      const payload = { invoice };

      // Creating Charge / Payment Request
      const result = await zbd.decodeCharge(payload);

      // Returning JSON payload
      return res.status(200).json({ ...result });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
