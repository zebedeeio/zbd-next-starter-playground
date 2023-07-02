require('dotenv').config();

module.exports = () => {
    // Check if the required environment variable is present
    if (!process.env.ZEBEDEE_API_KEY) {
      throw new Error('ZEBEDEE_API_KEY environment variable is required. Please set a .env.local file with the proper API Keys to get started.');
    }

    // Your other Next.js configuration
    return {
      reactStrictMode: true,
    }
};