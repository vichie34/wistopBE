import express from 'express';
import passport from 'passport';

const router = express.Router();

// Google OAuth login route
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth callback route
router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect to the frontend
    res.redirect(process.env.FRONTEND_BASE_URL || '/');
  }
);

export default router;