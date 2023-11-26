import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./routes/posts.js";
dotenv.config();

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.use("/api/posts", router);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB Connected");
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => console.log(err));
