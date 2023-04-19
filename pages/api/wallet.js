import { zbd } from '@zbd/node';

// Get environment variable
const ZEBEDEE_API_KEY = process.env.ZEBEDEE_API_KEY;

export default async function handler(req, res) {
  // Ensure API Key is passed
  if (!ZEBEDEE_API_KEY || ZEBEDEE_API_KEY === '') {
    res.status(200).json({ success: false, message: 'No API Key provided.' });
  }

  // New ZBD client instance
  const ZBD = new zbd(ZEBEDEE_API_KEY);
  
  // Fetching Wallet Balance
  const wallet = await ZBD.getWallet();

  // Returning JSON payload
  res.status(200).json({ ...wallet });
}
