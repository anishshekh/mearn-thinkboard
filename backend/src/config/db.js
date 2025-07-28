import mongoose from "mongoose";


export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    
    console.error("error connecting to mongodb",error);
    process.exit(1);
  }
}