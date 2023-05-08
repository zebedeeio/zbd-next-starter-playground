import { zbd as ZBD } from '@zbd/node';

// Get environment variable
const ZEBEDEE_API_KEY = process.env.ZEBEDEE_API_KEY;

// New ZBD client instance
const zbd = new ZBD(ZEBEDEE_API_KEY);

// Export client
export const getZBD = (res) => {
  // Ensure API Key is passed
  if (!ZEBEDEE_API_KEY || ZEBEDEE_API_KEY === '') {
    return res.status(401).json({
      success: false,
      message: '@zbd/node config: No API Key provided.'
    });
  }

  return { zbd };
};