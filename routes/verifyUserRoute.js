// import express from 'express';
// import verifyUser from '../Services/nimcService.js';

// const router = express.Router();

// router.post('/verify', async (req, res) => {
//   const { userId } = req.body;

//   try {
//     const verificationResult = await verifyUser(userId);
//     res.status(200).json(verificationResult);
//   } catch (error) {
//     res.status(500).json({ error: 'User verification failed' });
//   }
// });

// export default router;