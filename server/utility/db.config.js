import mongoose from "mongoose";

function connectDb() {
  try {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("db connected"))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
}
export default connectDb;
