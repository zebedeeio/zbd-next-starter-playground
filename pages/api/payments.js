import { getZBD } from '@/services/zbd';
import { cleanup } from '@/utils/cleanup';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Get zbd client
      const { zbd } = getZBD(res);

      // Deconstruct request body
      const { invoice } = JSON.parse(req.body);

      // Construct payload
      const payload = cleanup({ invoice });

      // Make Payment
      const data = await zbd.sendPayment(payload);

      // Returning JSON payload
      return res.status(200).json({ ...data });
    } catch (error) {
      return res.status(400).json({ success: false, error });
    }
  } else if (req. method === 'GET') {
    // Get zbd client
    const { zbd } = getZBD(res);

    try {
      // Deconstruct query
      const { paymentId } = req.query;

      // Get Charge
      const result = await zbd.getPayment(paymentId);

      // Returning JSON payload
      return res.status(200).json({ ...result });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
