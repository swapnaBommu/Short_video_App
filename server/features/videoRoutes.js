import express from "express";
import { createVideo, getVideos } from "./videoController.js";

const router = express.Router();

router.post('/',createVideo);
router.get('/',getVideos);

export default router;