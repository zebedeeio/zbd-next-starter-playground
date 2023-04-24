import { ZBD } from '@/services/zbd';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Deconstruct body
    const { lnAddress } = JSON.parse(req.body);

    // ZBD
    const response = await ZBD.validateLightningAddress(lnAddress);

    // Returning JSON payload
    res.status(200).json({ ...response });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
