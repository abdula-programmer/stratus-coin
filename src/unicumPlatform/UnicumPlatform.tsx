import React from "react";
import styles from "./UnicumPlatform.module.css";
import stylesGeneral from "../styles.module.css";

const UnicumPlatform = () => {
  return (
    <div className={styles["unicum-platform"]}>
      <div className={stylesGeneral["container"]}>
        <h1
          className={`${stylesGeneral["title-block"]} ${styles["title-block"]}`}
        >
          Уникальные платформы
        </h1>
        <div className={`${stylesGeneral["title-block-center"]} ${styles['block-description']}`}>
            Крипто - монета Stratus работает на трёх собственных платформах
            обеспеченных уникальным маршрутизатором и плавающим кодом
            безопасности. Переход на каждую платформу синхронизирован реферальной ссылкой. Каждая платформа обладает уникальными
            характеристиками:
          </div>
        <div className={styles["unicum-info"]}>
          <ul className={styles["unicum-list"]}>
            <li className={styles["unicum-item"]} data-aos="fade-right">
              <div className={styles["unicum-item-top"]}>
                <img src="/img/digital-exchange.png" className={styles['unicum-item-img']} alt="digital-exchange" />
                <h2>Торговля цифровыми активами</h2>
              </div>
              <div className={styles["unicum-item-description"]}>
                Первая платформа специализируется на торговле цифровыми активами
              </div>
            </li>
            <li className={styles["unicum-item"]} data-aos="fade-up">
              <div className={styles["unicum-item-top"]}>
                <img src="/img/craudfanding.png" className={styles['unicum-item-img']} alt="craudfanding" />
                <h2>Краудфандинге</h2>
              </div>
              <div className={styles["unicum-item-description"]}>
                Вторая - на заключении сделок между компаниями.
              </div>
            </li>
            <li className={styles["unicum-item"]} data-aos="fade-left">
              <div className={styles["unicum-item-top"]}>
                <img src="/img/digital-goods.png" className={styles['unicum-item-img']} alt="digital-exchange" />
                <h2>Продвижание цифровых товаров и услуг</h2>
              </div>
              <div className={styles["unicum-item-description"]}>
                Третья предоставляет инструменты для создания и продвижения
                собственных крипто-проектов
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UnicumPlatform;
