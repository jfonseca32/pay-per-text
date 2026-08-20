import mongoose from "mongoose";

export async function connectDB() {
  try {
    const mongoURI = process.env.MONGO_URI; // get secret from dotenv

    if (!mongoURI) {
      throw new Error("MONGO_URI is required");
    }

    const connection = await mongoose.connect(mongoURI); // connect to db
    console.log("MongoDB connected", connection.connection.host);
  } catch (error) {
    if (error instanceof Error) {
      console.error("MongoDB connection error:", error.message);
    } else {
      console.error("An unexpected error occurred:", error);
    }

    process.exit(1); // 1 means failed; 0 means success
  }
}
