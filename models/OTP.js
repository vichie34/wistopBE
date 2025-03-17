import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  codeHash: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300,
  }, // OTP expires in 5 minutes
  verified: {
    type: Boolean,
    default: false,
  },
});

const OTP = mongoose.model('OTP', otpSchema);

export default OTP;
