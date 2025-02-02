import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/lama-blog")
      .then(() => console.log("mongo db connected"));
  } catch (err) {
    console.log(err);
  }
};
export default connectDB;
