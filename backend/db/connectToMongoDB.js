import mongoose from "mongoose";

const connectToMongoDB=async()=>{
    try{

    console.log("MONGO_DB_URI in connectToMongoDB:", process.env.MONGO_DB_URI); // Debug log
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("MongoDB connected..");
    }
    catch(error ){
        console.log("error in connecting to mongodb",error.message) 
    }
}

export default connectToMongoDB;