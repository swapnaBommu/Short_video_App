import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {connectDB} from "./config/db.js";
import videoRoutes from './features/videoRoutes.js'

dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//database
connectDB();

//routes
app.use("/api/v1/videos", videoRoutes)

const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server is running on port: ${port}`)
})