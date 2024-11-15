import React from "react";
import styles from "./StructAnaliz.module.css";
import stylesGeneral from "../styles.module.css";

const StructAnaliz = () => {
  return (
    <div className={styles["struct-analiz"]}>
      <div className={stylesGeneral["container"]}>
        <h1 className={stylesGeneral["title-block"]}>Структурный анализ</h1>
        <div className={styles["struct-analiz-info"]}>
          <div className={styles['struct-analiz-info-inner']}>
            <img
              src="/img/struct-analiz.jpg"
              className={styles["struct-info-img"]}
            />
            <p className={`${stylesGeneral["block-text"]} ${styles["block-text"]}`}>           Анализ рынка монеты Stratus показывает стабильный рост ее
            капитализации. За последний тестовый месяц объем оборота на всех
            трех площадках увеличился на 26%, несмотря на общую волатильность
            крипторынка. Это свидетельствует о растущей популярности монеты и
            доверии инвесторов. <br />
            <br />
            Новая криптовалюта Stratus при тестовой модуляции показала
            стабильный рост за короткий период. Капитализация монеты имеет
            быструю ликвидность благодаря инновационным маршрутизаторам Slb на
            трех собственных платформах. <br />
            <br />
            Монету Stratus ожидает интересное
            будущее, так как каждая площадка постоянно совершенствуется и
            дополняется новыми возможностями. Предполагается, что в скором
            времени появятся еще больше партнерских решений.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StructAnaliz;
