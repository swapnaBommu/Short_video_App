import mongoose, { model } from "mongoose";

const videoSchema = new mongoose.Schema({
    url:String,
    channel:String,
    description:String,
    song:String,
    likes:String,
    shares:String,
    messages:String
})

const videoModel = mongoose.model("Video",videoSchema);

export default videoModel;