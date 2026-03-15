import "./App.css";
import Video from "./components/Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
          channel="swapnaBommu"
          description="Macbook Air to new windows editing"
          song="I am on windows PC"
          likes={345}
          messages={122}
          shares={120}
        />
        <Video
          url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
          channel="shannu"
          description="Macbook Air"
          song="I am a boy"
          likes={348}
          messages={22}
          shares={167}
        />
      </div>
    </div>
  );
}

export default App;
