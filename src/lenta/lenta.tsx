import React, { useEffect, useState } from "react";
import styles from "./lenta.module.css";
import {
  Parallax,
  ParallaxProvider,
  useParallaxController,
} from "react-scroll-parallax";

const Lenta: React.FC = () => {
  const parallaxController = useParallaxController();
  const [isParallaxActive, setIsParallaxActive] = useState(
    parallaxController !== null
  );

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setIsParallaxActive(!isMobile);
    };

    handleResize(); // Check initial screen size

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [parallaxController]);

  return (
    <div className={styles["lenta"]}>
      <Parallax
        translateX={isParallaxActive ? ["450px", "-600px"] : [0, 0]}
        className={styles["lenta-info"]}
      >
        <div className={styles["lenta-info__text"]}>
          <h3 className={styles["lenta-info__title"]}>
            <span>3</span> площадки для обмена
          </h3>
        </div>
        <div className={styles["lenta-info__text"]}>
          <h3 className={styles["lenta-info__title"]}>Показательный анализ</h3>
        </div>
        <div className={styles["lenta-info__text"]}>
          <h3 className={styles["lenta-info__title"]}>Будущий потенциал</h3>
        </div>
        <div className={styles["lenta-info__text"]}>
          <h3 className={styles["lenta-info__title"]}>Устойчивые тренды</h3>
        </div>
      </Parallax>

      <img src="/img/lenta.gif" alt="lenta" className={styles["lenta-img"]} />
    </div>
  );
};

const LentaWithParallax: React.FC = () => (
  <ParallaxProvider>
    <Lenta />
  </ParallaxProvider>
);

export default LentaWithParallax;
