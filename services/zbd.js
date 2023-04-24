import { zbd } from '@zbd/node';

// Get environment variable
const ZEBEDEE_API_KEY = process.env.ZEBEDEE_API_KEY;

// Ensure API Key is passed
if (!ZEBEDEE_API_KEY || ZEBEDEE_API_KEY === '') {
  res.status(200).json({ success: false, message: 'No API Key provided.' });
}

// New ZBD client instance
export const ZBD = new zbd(ZEBEDEE_API_KEY);
