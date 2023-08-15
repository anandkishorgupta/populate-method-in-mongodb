// import model
import Comment from "../models/commentModel";

// business logic
exports.createComment=async(req,res)=>{
    try {
        // fetch data from req body
        const {post,user,body}=req.body;
        const comment=new Comment({
            post,user,body
        })
        const savedComment=await comment.save();
        
    } catch (error) {
        
    }
}