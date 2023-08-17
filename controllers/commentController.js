
import Comment from "../models/commentModel.js";
import Post from "../models/postModel.js";

// business logic
export const createComment = async (req, res) => {
    try {
        // fetch data from req body
        const { post, user, body } = req.body;
        const comment = new Comment({
            post, user, body
        });
        const savedComment = await comment.save();

        // find the post by id, add new comment to its comment array
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { comments: savedComment._id } },
            { new: true }
        )
        .populate("comments") // populate the comments array with comment documents
        .exec();

        res.json({
            post: updatedPost
        });

    } catch (error) {
        return res.status(500).json({
            error: "Error while creating comments",
            message: error.message // Include the error message for debugging purposes
        });
    }
};
