import mongoose from "mongoose";

const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB Connected Successfully..");

    }catch(err){
        console.log("Error connecting DataBase :",err);
    }
}

export default connectDb;