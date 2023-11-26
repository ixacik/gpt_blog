import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  desc: String,
  img: String,
  content: String,
  author: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

export const Post = mongoose.model("Post", postSchema);
