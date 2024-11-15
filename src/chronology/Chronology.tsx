import React from "react";
import styles from "./Chronology.module.css";
import CardCharacter from "../card";
import stylesGeneral from '../styles.module.css'

const Chronology = () => {
  return (
    <div className={styles["chronology"]} id="chronology">
      <div className={stylesGeneral['container']}>
        <div className={`${stylesGeneral['title-block']} ${styles["chronology-title"]}`}>Хронология монеты</div>
        
      </div>
      <CardCharacter/>
    </div>
  );
};

export default Chronology;
