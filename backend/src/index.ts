import mongoose from "mongoose";
import app from "./app";

const PORT = 3000;

mongoose
  .connect("mongodb://127.0.0.1:27017/workflow-builder")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Mongo error:", err);
  });
