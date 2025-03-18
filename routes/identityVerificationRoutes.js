const express = require('express');
const { verifyIdentityController } = require('../controllers/identityVerificationController');

const router = express.Router();

// POST /api/verify-identity
router.post('/verify-identity', verifyIdentityController);

module.exports = router;