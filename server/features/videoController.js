import videoModel from "./videoModel.js";


export const createVideo = async (req, res) =>{
    try{
        const {url,channel,description,song,likes,shares,messages} = req.body;
        const newVideo = await videoModel.create({url,channel,description,song,likes,shares,messages});
        res.status(201).json(newVideo);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
}

export const getVideos = async (req, res) => {
    try {
        const videos = await videoModel.find({});
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};