import { zbd as ZBD } from '@zbd/node';

// Get environment variable
const ZBD_API_KEY = process.env.ZBD_API_KEY;

// New ZBD client instance
const zbd = new ZBD(ZBD_API_KEY);

// Export client
export const getZBD = (res) => {
  // Ensure API Key is passed
  if (!ZBD_API_KEY || ZBD_API_KEY === '') {
    return res.status(401).json({
      success: false,
      message: '@zbd/node config: No API Key provided.'
    });
  }

  return { zbd };
};