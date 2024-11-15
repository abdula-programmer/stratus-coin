import React from "react";
import styles from "./ImportanceCoin.module.css";
import stylesGeneral from "../styles.module.css";

const ImportanceCoin = () => {
  return (
    <div className={styles["importance-coin"]} id="importance">
      <div className={stylesGeneral["container"]}>
        <h1
          className={`${stylesGeneral["title-block"]} ${styles["title-block"]}`}
        >
          Важность монеты
        </h1>
        <div className={stylesGeneral["title-block-center"]}>
          Общая структура капитализации обеспечивает номинальную стоимость
          валюты с привязкой к текущему курсу Ethereum и Tether. Модуль Dex SIb,
          обеспечен текущим курсом вода и выхода на Stratus Coin. Важность монеты
          Stratus при организации партнёрских сделок:
        </div>
        <ul className={styles["importance-list"]}>
          <li className={styles["importance-list__item"]} data-aos="fade-left">
            <div className={styles["importance-list__item-top"]}>
              <img
                src="/img/partnerships.png"
                className={styles["importance-list__item-img"]}
                alt="Партнерские соглашения"
              />
              <h3 className={styles["importance-list__item-title"]}>
                Партнёрские соглашения
              </h3>
            </div>
            {/* <p className={styles["importance-list__item-text"]}>
              Монета Stratus является гарантом выполнения партнёрских
              соглашений, обеспечивая надёжность и безопасность сделок.
            </p> */}
          </li>
          <li
            className={styles["importance-list__item"]}
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div className={styles["importance-list__item-top"]}>
              <img
                src="/img/market-capitalization.png"
                className={styles["importance-list__item-img"]}
                alt="Капитализация монеты"
              />
              <h3 className={styles["importance-list__item-title"]}>
                Капитализация монеты
              </h3>
            </div>
            {/* <p className={styles["importance-list__item-text"]}>
              Монета Stratus имеет высокую капитализацию, что обеспечивает
              стабильность и ликвидность партнёрских сделок.
            </p> */}
          </li>
          <li
            className={styles["importance-list__item"]}
            data-aos="fade-left"
            data-aos-delay="650"
          >
            <div className={styles["importance-list__item-top"]}>
              <img
                src="/img/platform-profit.png"
                className={styles["importance-list__item-img"]}
                alt="Капитализация монеты"
              />
              <h3 className={styles["importance-list__item-title"]}>
                Рост прибыли площадки
              </h3>
            </div>
            {/* <p className={styles["importance-list__item-text"]}>
              Монета Stratus обеспечивает рост прибыли площадки за счёт
              привлечения новых партнёров и увеличения объёма сделок.
            </p> */}
          </li>
          <li
            className={styles["importance-list__item"]}
            data-aos="fade-left"
            data-aos-delay="800"
          >
            <div className={styles["importance-list__item-top"]}>
              <img
                src="/img/demand.png"
                className={styles["importance-list__item-img"]}
                alt="demand"
              />
              <h3 className={styles["importance-list__item-title"]}>
                Увеличение спроса на монету
              </h3>
            </div>
            {/* <p className={styles["importance-list__item-text"]}>
              Монета Stratus обеспечивает увеличение спроса на монету, что
              приводит к росту её стоимости и привлекательности для инвесторов.
            </p> */}
          </li>
          <li
            className={styles["importance-list__item"]}
            data-aos="fade-left"
            data-aos-delay="950"
          >
            <div className={styles["importance-list__item-top"]}>
              <img
                src="/img/cost-up.png"
                className={styles["importance-list__item-img"]}
                alt="cost-up"
              />
              <h3 className={styles["importance-list__item-title"]}>
                Повышение рыночной стоимости
              </h3>
            </div>
            {/* <p className={styles["importance-list__item-text"]}>
              Монета Stratus обеспечивает повышение рыночной стоимости за счёт
              увеличения спроса и капитализации.
            </p> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ImportanceCoin;
