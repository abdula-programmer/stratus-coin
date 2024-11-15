import React from "react";
import styles from './HeaderBlock.module.css'

const Video = () => {
  return (
    <video autoPlay loop muted className={styles["video"]} preload="metadata" playsInline>
      <source src="/img/video_2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
