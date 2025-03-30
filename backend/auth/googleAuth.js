import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        process.env.NODE_ENV === 'production'
          ? process.env.GOOGLE_REDIRECT_URI_PROD
          : process.env.GOOGLE_REDIRECT_URI_DEV,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Handle user authentication logic here
        const user = await findOrCreateUser(profile); // Replace with your user logic
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

// Serialize and deserialize user (optional, depending on your session setup)
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  // Find user by ID
  findUserById(id).then((user) => done(null, user));
});