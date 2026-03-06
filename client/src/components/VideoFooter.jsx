import "./VideoFooter.css";
import MusicNote from '@mui/icons-material/MusicNote';
import Marquee from "react-fast-marquee";

const VideoFooter = () => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@swapnaBommu</h3>
        <p>Macbook Air to new Windows editing beast</p>
        <div className="videoFooter__ticker">
          <MusicNote className="videoFooter__icon" />

          
<Marquee speed={40} gradient={false} pauseOnHover direction="left">
      <p style={{ marginRight: 32 }}>I am a Windows PC</p>
      {/* If you had multiple items, just add them inline */}
      {/* <span>…more items…</span> */}
    </Marquee>

        </div>
      </div>
      <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt="video footer" />
    </div>
  );
};

export default VideoFooter;
