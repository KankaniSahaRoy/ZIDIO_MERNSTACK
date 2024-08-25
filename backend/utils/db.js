import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Ensure environment variables are loaded

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) {
            throw new Error('MONGO_URI environment variable is not set');
        }
        await mongoose.connect(uri); // No need for deprecated options
        console.log('MongoDB connection successful');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

export default connectDB;


