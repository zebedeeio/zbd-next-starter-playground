import { ZBD } from '@/services/zbd';
import { cleanup } from '@/utils/cleanup';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Deconstruct body
    const {
      amount,
      comment,
      lnAddress,
      internalId,
      callbackUrl,
    } = JSON.parse(req.body);
    
    // Fetching Wallet Balance
    const response = await ZBD.sendLightningAddressPayment(cleanup({
      amount,
      comment,
      lnAddress,
      internalId,
      callbackUrl,
    }));

    // Returning JSON payload
    res.status(200).json({ ...response });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
