import React, { useEffect, useRef } from "react";
import './Video.scss';
import YouTube from 'react-youtube';

export default function App() {
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  
  return (
    <div className="youtube mt-5"> 
    <div className="main-video"> 
    <div className="youtube_video">
      <iframe width="1080px" height="720px" id="video_id" src="https://www.youtube.com/embed/8Kqo25V8I9Q?rel=0"
    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
         </div>
    </div>
 </div>
    
    
    
  );
  
}

