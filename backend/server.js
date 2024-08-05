import express from "express"
import dotenv from "dotenv"
import path from "path";
import authRoutes from "./Routes/auth.routes.js"
import messageRoutes from "./Routes/message.routes.js"
import userRoutes from "./Routes/user.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js"
import cookieParser from "cookie-parser"
import { app,server } from "./Socket/socket.js"
import cors from 'cors';

dotenv.config()
const PORT=process.env.PORT || 5000
const __dirname = path.resolve();//gives absolute path of root folder
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true, // if you need to include cookies in requests
}));
app.use(express.json())//it extracts the fields from req.body
app.use(cookieParser())//to parse the incoming cookies from req.cookies,before we run below routes we run this middleware to access the cookie

app.use("/api/auth/",authRoutes)
app.use("/api/message/",messageRoutes)
app.use("/api/users/",userRoutes)

app.use(express.static(path.join(__dirname, "/frontend/dist")));//static is middleware given by express to store files such as index.html,img files

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// app.get("/",(req,res)=>{
//     res.send("Hello ")
// })

 server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server running on ${PORT}`)
 })