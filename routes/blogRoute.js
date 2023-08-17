import express from "express";
import { createComment } from "../controllers/CommentController.js";
import { likePost, unlikePost } from "../controllers/LikeController.js";
import { createPost, getAllPosts } from "../controllers/PostController.js";
const router = express.Router();

// Mapping create
router.post("/comments/create", createComment);
router.post("/posts/create",createPost)
router.get("/posts",getAllPosts)
router.post("/likes/like",likePost)
router.post("/likes/unlike",unlikePost)

// Export the router
export default router;
