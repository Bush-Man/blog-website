import express from "express";
import {
  createPost,
  getPost,
  getPosts,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/create", createPost);
router.get("/test", (req, res) => res.send("hello"));
router.get("/:slug", getPost);

export default router;
