import mongoose from "mongoose";

const mongoURL = "mongodb://localhost:27017/userdb";

mongoose.connect(mongoURL);
const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

export default db;
