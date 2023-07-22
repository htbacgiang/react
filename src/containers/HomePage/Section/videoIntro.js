import React, { useEffect, useRef } from "react";
import "./videoIntro.scss";
import YouTube from 'react-youtube';

export default function App() {
  const opts = {
    height: '720px',
    width: '80%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  
  return (
    
    <div className="videoIntro">
      <YouTube videoId="8Kqo25V8I9Q" opts={opts} />;
    </div>
    
  );
  
}

