
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
          style={{ maxWidth: "90%", width: "100%", margin: "0 auto" }}
          playsInline
          loop
          muted
          controls
          alt=""
          src="https://videocdn.cos.tv/video/43876623798815744.mp4?Expires=1681994129&Signature=eFkDJARWzFIUvn9JPstbXVAnf8PRs-mXnodbEhsrFPlyBri2mnr3FGv~Odv27AtXydHkEMHhKuoczHvnJKkagSZMv10BlXoL2FsffZyt9EU87ECn-uhSvOzkEDnjciaGvfT~cIGZt7eTvISIOMzm2OH~WWj7j3wPspSBoUOu4jL0Ug3tXobaN7huAuAoceKsUCZ0EHKD3jb7VjA9cs6aoSmMVXzUEy6hqOrFuUYORO4VxJ5JwCXr8zF51RotIGRTWrDDY4hx3RwyROqtwfrneSH9bC9SUDuGB7Q5w08eyJZYRCP7ZUVSC7WPE0Odtb2phdWdPzcyyUZfM7cQWsPT6w__&Key-Pair-Id=APKAJ2AQKNFFAUYSAMUQ"
          
          ref={videoEl}
        />
      </div>
    </div>
  );
}
