import mongoose from "mongoose";
const conversationSchema=new mongoose.Schema(
    {
        participants:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"//stores user's id into participants array
        }],
        messages:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message",//stores message's id into messages array
            default:[]
        }]
    },
    {timestamps:true}
);
const Conversation=mongoose.model("Conversation",conversationSchema)
export default Conversation