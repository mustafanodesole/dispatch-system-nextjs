import mongoose from "mongoose";
export default async function Connect() {
  try {
    // mongoose.connect(process.env.MONGO_URI);
    mongoose.connect("mongodb+srv://engrmustafatawab05:SGuuTRv85imGtEw3@cluster0.0e2arsk.mongodb.net/dispatch-system")
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB Connected Successfully");
    });

    connection.on("error", (error) => {
      console.log("MongoDB Connection Error: ", error);
      process.exit();
    });
  } catch (error) {
    console.log(error);
  }
}