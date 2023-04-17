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
          src=
          "https://lh3.googleusercontent.com/QjTIyvkuzi4cCVWEkAN1oJchC1Om0f35wnk-hsG5wZsEc3XKasBCUfVTGlln0qurCeRGGCJLoBb6tCn8mssBvBwmE9XYlGm5eC23mRmcdb54PkL4Jn0R0rqFmhDEqLrNXOi7opSPGc-vYFdz_9Gx-3cHCLwdvDz70cvNu5UnldmSy7g0HrGpX6RmtYNM-bTZi4UuvQbWWqU0qVbeqPwVOi_gGuyx7eGXyo2GHq-vrECjVdI9JNxVClUcyBHnASVXNkFE5Zcx2rCHtztSeoUCMmvjgqf6U08-dVYLhiXvrRXiiuM_GtpDG4VSOS79Ht3yLsCVuV2VyEPuoqUW_8Q1p2Pvve0ZoI42gtM7o9Wy0MEGKJIs-NpnS7vHzCo6j2gkF1fKXU9RMKKs1c48vx-MzDe1vfCJxFEkvSadw3RLnFPU3gSJy-xj5F2ezE08t6NYstnUc-OLYaURHIhuEUBfeJ3B7vu9FV8x-l3I8-mt63wzVO5k-_z405tWpYJiKqRUBwbJ9pJyWjXhL9CvjI1CjQu3zYnLWd0QQhU9AVccdPSntlfK2-AvdsXJu9EsyqayL4ETCHoHSwEah8HjF7jaUw1_fZPvt-KF-wd2iI5DCVegJpMHWt2Dfzvbh6y5eosMw9tVC8Jn_Sw4xb-HrZM8QWEPjBxOjtV7fyAee7jmtNPjwLuccBN_9m2-AMvdY1CMdBnDPXGAC0IporG3j6qINkGok42v1IXD8HMN4l8NYTdEho8uvrauzxC9DZfgRGLDRNW2kKySMm8lkn7DiuLNMyDarSQaxaXe2o82cIhybimbFBPjQBO8vSCcVjFTlnlLkU9DGbHTWZWtFVfdu7dtFtye6J0Y2u_eJ8ThvlA6tpRtQ9kWYnMNeGYR8VM7XJxBu7YeW5QOy95TCADAifuDJfY7IDub32DTYJnON8ahmuj08QfGb4AoPtZYnk0EaAheCi2xQ9_5K2nOfyEK_D-23eAURUEnX6hpr2BWZf9ptalemeMZYuuoyk1K=m15?authuser=0&cpn=DUpwrMBGo5k8lloj&c=WEB_EMBEDDED_PLAYER&cver=1.20230411.01.00"
          
          ref={videoEl}
        />
      </div>
    </div>
  );
}
