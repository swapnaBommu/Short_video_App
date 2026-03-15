import { useRef, useState, useEffect } from "react";

import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  shares,
  messages,
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [likeCount, setLikeCount] = useState(likes);
  const [loading, setLoading] = useState(true);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
          setPlaying(true);
        } else {
          videoRef.current.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.7 },
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  // KEYBOARD CONTROLS
  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === "Space") {
        handleVideoPress();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [playing]);
  // DOUBLE CLICK LIKE
  const handleLike = () => {
    setLikeCount((prev) => prev + 1);
  };

  // PROGRESS BAR
  const handleTimeUpdate = () => {
    const percent =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(percent);
  };
  return (
    <>
      <div className="video">
        {loading && <div className="loader">Loading...</div>}

        <video
          src={url}
          className="video__player"
          loop
          ref={videoRef}
          loading="lazy"
          onClick={handleVideoPress}
          onDoubleClick={handleLike}
          onTimeUpdate={handleTimeUpdate}
          onWaiting={() => setLoading(true)}
          onPlaying={() => setLoading(false)}
        ></video>
        {!playing && <div className="play_icon">▶</div>}

        <div className="progress_container">
          <div className="progress_bar" style={{ width: `${progress}%` }}></div>
        </div>
        <VideoFooter channel={channel} description={description} song={song} />
        <VideoSidebar likes={likes} shares={shares} messages={messages} />
      </div>
    </>
  );
};

export default Video;
