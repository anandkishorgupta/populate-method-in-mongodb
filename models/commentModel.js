import mongoose from "mongoose";
const commentSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"  //reference to post model
    },
    user:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
})

const Comment=mongoose.model("Comment",commentSchema)
export default Comment;
