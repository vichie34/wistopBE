const { verifyIdentity } = require('../services/identityVerificationService');

/**
 * Controller to verify BVN and NIN
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function verifyIdentityController(req, res) {
  const { bvn, nin, phone } = req.body;

  if (!bvn && !nin && !phone) {
    return res.status(400).json({ error: 'At least one of BVN, NIN, or phone is required' });
  }

  try {
    const data = { bvn, nin, phone };
    const result = await verifyIdentity(data);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { verifyIdentityController };