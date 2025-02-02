import PostModel from "../models/post.model.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    return res.status(200).json(posts);
  } catch (error) {
    return res.json(error);
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await PostModel.findOne({ slug: req.params.slug });
    return res.status(200).json(post);
  } catch (error) {
    return res.json(error);
  }
};

export const createPost = async (req, res) => {
  try {
    console.log(req);
    const newPost = await new PostModel(req.body);
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    return res.json(error);
  }
};
