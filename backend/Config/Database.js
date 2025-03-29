import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoConnect = process.env.mongoURI;

if (!mongoConnect) {
  console.error('Error: MONGO_URI is not defined in the environment variables');
  process.exit(1);
}

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoConnect, {
      serverSelectionTimeoutMS: 120000
    });
    console.log(`MongoDB connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;