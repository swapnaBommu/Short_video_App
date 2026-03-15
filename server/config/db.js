import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

const url = process.env.ENV ==="Development" ? process.env.DEV_DB_URL : PROD_DB_URL;

export const connectDB  = async () => {
    try{
        await mongoose.connect(url);
        console.log('Mongodb connected to the url');
    }catch(err){
        console.log('Failed to connect mongodb', err.message)
    }
}
