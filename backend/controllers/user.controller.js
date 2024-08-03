import User from "../models/user.model.js";
export const getUser=async(req,res)=>{
	try{
		const loggedInUserId = req.user._id;
        const allUsers= await User.find({_id:{$ne:loggedInUserId}}).select("-password")//skip current logedin user
        res.status(200).json(allUsers)
    }
    catch(error){
        res.status(500).json({error:"internal server error"})
        console.log("error on getting all users",error.message)
    }
}