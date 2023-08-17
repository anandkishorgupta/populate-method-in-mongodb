import Like from "../models/likeModel.js";
import Post from "../models/postModel.js";

// like a post 
export const likePost = async (req, res) => {
    try {
        const { post, user } = req.body;
        const like = new Like({
            post,
            user
        })
        const savedLike = await like.save();
        // update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { likes: savedLike._id } }, { new: true }).populate("likes").exec();
        res.json({
            post: updatedPost
        })
    } catch (error) {
return res.json({
    error:"error while like this post"
})
    }
}
// dislike a post
export const unlikePost=async(req,res)=>{
    try {
        const {post,like}=req.body; //here post is  post id and like is like id 
        // find and delete like collection

        const deleteLike= await Like.findOneAndDelete({post:post,_id:like})
        const updatedPost=await Post.findByIdAndUpdate(post,{$pull:{likes:deleteLike._id}},{new:true})
        res.json({
            updatedPost
        })
    } catch (error) {
        return res.json({
            error:"error while unlike this post"
        })
    }
}