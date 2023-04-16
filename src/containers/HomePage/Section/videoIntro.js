import React, { useEffect, useRef } from "react";
import "./videoIntro.scss";
import lapTrinhTraiTim from '../../../assets/youtube/lapTrinhTraiTim.mp4';

export default function App() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="videoIntro">
      <div>
        <video
          style={{ maxWidth: "90%", width: "100%", margin: "0 auto" }}
          playsInline
          loop
          muted
          controls
          alt=""
          src="https://live.staticflickr.com/video/52821293231/d019a5e2c6/1080p.mp4?s=eyJpIjo1MjgyMTI5MzIzMSwiZSI6MTY4MTY0OTYwNywicyI6IjgwMzI5MDk4YTUxZTI3ZDE1OGQ4NWMxY2IzMzllZDJiOTM0ZTFiYzMiLCJ2IjoxfQ"
          ref={videoEl}
        />
      </div>
    </div>
  );
}
