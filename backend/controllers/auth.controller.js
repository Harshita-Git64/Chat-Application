import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import jsonWebTokenMethod from "../utils/generateToken.js";


export const signup=async(req,res)=>{
    try{
    const {fullName,username,password,confirmPassword,gender}=req.body;
    if(password!=confirmPassword){
        return res.status(404).json({error:"Passwords do not match"})
    }
    const user= await User.findOne({username})
    if(user)
    {
        return res.status(400).json({error:"User already exists"})
    }

    const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`

    const salt = await bcrypt.genSalt(10)
    const hashedPassword= await bcrypt.hash(password,salt);

    const newUser=new User({
        fullName,
        username,
        password:hashedPassword,
        gender,
        profilePic:gender==="male"?boyProfilePic:girlProfilePic
    })
    if(newUser){
        jsonWebTokenMethod(newUser._id,res)
        await newUser.save();
    
        res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            username:newUser.username,
            password:newUser.password,
            profilePic:newUser.profilePic
        })
    }
    else{
        return res.status(400).json({error:"Invalid user data"})
    }
   
}
catch(error){
console.log("error in signup",error.message)
res.status(500).json({error:"internal server error"})
}
    //res.send("this is Signup page")
}

export const login=async(req,res)=>{
    try{
        const{password,username}=req.body;
        const user=await User.findOne({username})
        const isPassword=await bcrypt.compare(password,user?.password || "")
        if(!user || !isPassword)
        {
           return res.status(400).json({error:"invalid user credentials"})
        }
        jsonWebTokenMethod(user._id,res)
           // res.status(200).json({message:"user logged in sucessfully"})
            res.status(201).json({
                _id:user._id,
                fullName:user.fullName,
                username:user.username,
                password:user.password,
                profilePic:user.profilePic
            })
        
    }
    catch(error){
        console.log("Error in login:",error.message)
        res.status(500).json({error:"internal sever error"})
    }
   
}

export const logout=async(req,res)=>{
    try{
    res.cookie("cookies","",{maxAge:0})
   return res.status(200).json({message:"user logged out sucessfully"})
    }
    catch(errors){
        console.log("error in logout",error.message)
        res.status(501).json({message:"Internal server error"})
    }
   
}
export const getUserDetails=async(req,res)=>{
    try{

        const Users=await User.find({})
        res.json(Users)
    }
    catch(errors)
    {
        console.log("error is",errors.message)
    }
}