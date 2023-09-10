import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
  } catch (error) {
    throw new Error("Database Connection failed!");
  }
};

export default connectDB;