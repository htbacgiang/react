import React, { useEffect, useRef } from "react";
import "./videoIntro.scss";

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
          alt="All the devices"
          src="https://live.staticflickr.com/video/52401433060/ca9721a467/1080p.mp4?s=eyJpIjo1MjQwMTQzMzA2MCwiZSI6MTY2NDc4MjAzMiwicyI6IjEwMjdhNmE5ODUzOTUyYjQ0N2FlZGFiYjdhYTJjZTM5YjkxYmRhY2QiLCJ2IjoxfQ"
          ref={videoEl}
        />
      </div>
    </div>
  );
}
