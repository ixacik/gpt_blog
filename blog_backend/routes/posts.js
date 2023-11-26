import express from "express";
import mongoose from "mongoose";
import { Post } from "../models/post.js";
export const router = express.Router();

// get all blog posts
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

// create a new blog post
router.post("/new", (req, res) => {
  Post.create({
    title: req.body.title,
    desc: req.body.desc,
    img: req.body.img,
    content: req.body.content,
    author: req.body.author,
  })
    .then((newPost) => {
      res.json({ message: "New post created", post: newPost });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

// get a specific blog post
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

// update a specific blog post
router.patch("/:id", (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedPost) => {
      res.json({ message: "Post updated", post: updatedPost });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

// delete a specific blog post
router.delete("/:id", (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then((deletedPost) => {
      res.json({ message: "Post deleted", post: deletedPost });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});
