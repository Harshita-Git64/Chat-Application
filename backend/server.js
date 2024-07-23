//const express=require('express')
//const dotenv=require("dotenv")

// const authRoutes=require("./Routes/auth.routes.js")
// const connectToMongoDB=require("./db/connectToMongoDB.js")

import express from "express"
import dotenv from "dotenv"
import authRoutes from "./Routes/auth.routes.js"
import messageRoutes from "./Routes/message.routes.js"
import userRoutes from "./Routes/user.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js"
import cookieParser from "cookie-parser"

dotenv.config()
const app=new express();
const PORT=process.env.PORT || 5000

app.use(express.json())//it extracts the fields from req.body
app.use(cookieParser())//to parse the incoming cookies from req.cookies,before we run below routes we run this middleware to access the cookie

app.use("/api/auth/",authRoutes)
app.use("/api/message/",messageRoutes)
app.use("/api/users/",userRoutes)

app.get("/",(req,res)=>{
    res.send("Hello ")
})

 app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server running on ${PORT}`)
 })