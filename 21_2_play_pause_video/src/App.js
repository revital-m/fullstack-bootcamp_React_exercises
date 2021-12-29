import React, { useRef } from "react";
import "./App.css";

const App = () => {
  const myVideo = useRef("");

  const handlePlay = () => {
    myVideo.play();
  };

  const handlePause = () => {
    myVideo.pause();
  };

  return (
    <div className="container">
      <iframe
        ref={myVideo}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fUXdrl9ch_Q"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <button className="btn" onClick={handlePlay}>
        Play
      </button>
      <button className="btn" onClick={handlePause}>
        Pause
      </button>
    </div>
  );
};

export default App;
