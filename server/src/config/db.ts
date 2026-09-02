import mongoose from "mongoose";

import { resolveMongoUri } from "./devDb.js";

const connectDB = async (): Promise<void> => {
  try {
    const uri = await resolveMongoUri();

    const connection = await mongoose.connect(uri);

    console.log(
      `MongoDB Connected: ${connection.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
