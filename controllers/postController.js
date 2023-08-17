import Post from "../models/postModel.js";
export const createPost = async (req, res) => {
    try {
        const { title, body } = req.body;
        const post = new Post({
            title, body
        })
        const savedPost = await post.save();
        res.json({
            post: savedPost
        })
    } catch (error) {
        return res.status(400).json({
            error: "error while creating post"
        })
    }
}
export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts
        })
    } catch (error) {
        return res.status(400).json({
            error: "error while fetching post"
        })
    }
}