import { getZBD } from '@/services/zbd';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Get zbd client
    const { zbd } = getZBD(res);
    
    try {
      // Fetching Wallet Balance
      const result = await zbd.getWallet();

      // Returning JSON payload
      return res.status(200).json({ ...result });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
