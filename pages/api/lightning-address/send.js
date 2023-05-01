import { getZBD } from '@/services/zbd';
import { cleanup } from '@/utils/cleanup';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Get zbd client
      const { zbd } = getZBD(res);

      // Deconstruct request body
      const {
        amount,
        comment,
        lnAddress,
        internalId,
        callbackUrl,
      } = JSON.parse(req.body);

      // Construct payload
      const payload = cleanup({
        amount,
        comment,
        lnAddress,
        internalId,
        callbackUrl,
      });

      // Sending Lightning Address Payment
      const data = await zbd.sendLightningAddressPayment(payload);

      // Returning JSON payload
      return res.status(200).json({ ...data });
    } catch (error) {
      return res.status(400).json({ success: false, error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
