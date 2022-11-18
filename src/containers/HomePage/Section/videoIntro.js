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
          style={{ maxWidth: "90%", width: "800px", margin: "0 auto" }}
          playsInline
          loop
          muted
          controls
          alt=""
          src="https://live.staticflickr.com/video/52401433060/ca9721a467/1080p.mp4?s=eyJpIjo1MjQwMTQzMzA2MCwiZSI6MTY2ODc4MDc3MSwicyI6IjQ0YWE2YTA1MDFjMmIyODg5MThjMzBmZTI5NTY5NDVmNjdlOTNiZWIiLCJ2IjoxfQ"
          ref={videoEl}
        />
      </div>
    </div>
  );
}
