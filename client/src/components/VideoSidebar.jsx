import React, { useState } from 'react';
import './VideoSidebar.css';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Message from '@mui/icons-material/Message';
import Share from '@mui/icons-material/Share';

const VideoSidebar = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <Favorite fontSize="large" onClick={() => setLiked(false)} />
        ) : (
          <FavoriteBorder fontSize="large" onClick={() => setLiked(true)} />
        )}
        <p>{liked ? 101 : 100}</p>
      </div>

      <div className="videoSidebar__button">
        <Message fontSize="large" />
        <p>345</p>
      </div>

      <div className="videoSidebar__button">
        <Share fontSize="large" />
        <p>109</p>
      </div>
    </div>
  );
};

export default VideoSidebar;