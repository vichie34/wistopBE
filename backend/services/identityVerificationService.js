// // import { post } from 'axios';

// // Load environment variables
// const MY_IDENTITY_PASS_API_KEY = process.env.MY_IDENTITY_PASS_API_KEY;
// const MY_IDENTITY_PASS_BASE_URL = process.env.MY_IDENTITY_PASS_BASE_URL;

// /**
//  * Verify BVN and NIN using MyIdentityPass API
//  * @param {Object} data - The data to verify (e.g., BVN, NIN, phone number)
//  * @returns {Promise<Object>} - The API response
//  */
// async function verifyIdentity(data) {
//   try {
//     const response = await post(
//       `${MY_IDENTITY_PASS_BASE_URL}/bvn-nin-phone`,
//       data,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${MY_IDENTITY_PASS_API_KEY}`,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error('Error verifying identity:', error.response?.data || error.message);
//     throw new Error('Failed to verify identity');
//   }
// }

// export default { verifyIdentity };