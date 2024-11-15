import React from "react";
import styles from "./Invest.module.css";
import stylesGeneral from "../styles.module.css";

const Invest = () => {
  return (
    <div className={styles["invest"]} id="invest">
      <div className={stylesGeneral["container"]}>
        <h1 className={stylesGeneral["title-block"]}>Инвестиции в монету</h1>

        <div className={styles["invest-bottom"]}>
          <img
            data-aos="fade-right"
            src="/img/invest.jpg"
            alt="invest"
            className={styles["invest-img"]}
          />

          <p
            className={`${stylesGeneral["block-text"]} ${styles["block-text"]}`}
            data-aos="fade-left"
          >
            Инвестиция в монету Stratus представляет возможность для получения
            стабильных и высоких доходов. Монета имеет ликвидный потенциал для
            роста стоимости монеты. Технология продвижения монеты основана на
            инновациях в структуре работы финансовой площадок, что позволяет
            иметь стабильный оборот и ликвидность монеты Stratus, что делает
            монету отличным вариантом для долгосрочных инвестиций. <br />
            Стабильный рост капитализации: <br />
              * 2024 (1-2 квартал) - увеличение (тестовый период) <br />
              * 2024 (2-3 квартал) - постоянный прирост  
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invest;
