import { useEffect, useState } from "react";
import "./App.css";
import Video from "./components/Video";
import axios from "axios";

function App() {
  const [videos, setVideos] = useState([
    {
      url: "url",
      channel: "channel",
      description: "des",
      song: "song",
      likes: "likes",
      shares: "shares",
      messages: "messages",
    },
  ]);
  const fetchVideos = async () => {
    console.log("assssssssssssssssss", axios);
    const res = await axios.get("http://localhost:5000/api/v1/videos");
    setVideos(res.data);
    return res;
  };
  useEffect(() => {
    fetchVideos();
  }, []);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((video) => (
          <Video
            key={video.url}
            url={video.url}
            channel={video.channel}
            description={video.description}
            song={video.song}
            likes={video.likes}
            messages={video.messages}
            shares={video.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
