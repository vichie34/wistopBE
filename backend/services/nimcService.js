import axios from 'axios';

const nimcApiBaseUrl = process.env.NIMC_API_BASE_URL;
const nimcApiKey = process.env.NIMC_API_KEY;

const verifyUser = async (userId) => {
  try {
    const response = await axios.post(`${nimcApiBaseUrl}/verify`, {
      userId,
      apiKey: nimcApiKey,
    });
    return response.data;
  } catch (error) {
    console.error('Error verifying user:', error);
    throw error;
  }
};

export default verifyUser;