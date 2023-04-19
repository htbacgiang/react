import React, { useEffect, useRef } from "react";
import "./videoIntro.scss";
import intro from '../../../assets/intro.mp4';

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
          src={ intro }
          ref={videoEl}
        />
      </div>
    </div>
  );
}
