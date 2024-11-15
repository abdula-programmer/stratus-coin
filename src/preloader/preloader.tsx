import React from "react";
import styles from "./preloader.module.css";

const Preloader = () => {
  return (
    <div className={styles["preloader"]}>
      <video className={styles["preloader-img"]} autoPlay loop muted preload="auto">
        <source src="/img/3d-logo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Preloader;
