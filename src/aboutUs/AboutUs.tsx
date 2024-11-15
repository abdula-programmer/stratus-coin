import React from "react";
import styles from "./AboutUs.module.css";
import stylesGeneral from "../styles.module.css";

const AboutUs = () => {
  return (
    <div className={styles["about-us"]} id="about-us">
      <div className={stylesGeneral["container"]}>
        <div className={styles["about-us__title-block"]}>
          <h1
            className={`${styles["title-block"]} ${stylesGeneral["title-block"]}`}
          >
            О монете Stratus coin
          </h1>

          <div className={styles["about-us__description"]}>
            <div
              className={styles["about-us__description-text"]}
              data-aos="fade-right"
            >
              Монета основана на самостоятельной площадке Dex SIb, имеющих
              прерогативу контроля (Crypto Regulation Mica) при верификации
              клиента, c отдельным выделением ликвидного имущества контрагентов
              для обеспечения общей структуры капитализации площадки. <br />
              <br />
              Монета Stratus имеет ряд уникальных характеристик, отличающих её от
              других криптовалют. В отличие от большинства монет, Stratus имеет
              собственные платформы для обмена, что позволяет избежать комиссий
              бирж и обеспечить стабильность стоимости монеты.
              <br />
              <br />
              Алгоритм добычи монеты Stratus основан на проверке подлинности
              транзакций модуля Dex Slb, а не на вычислительной мощности, как у
              биткоина, что делает её более экологичной и доступной для майнинга
              внутри собственной системы.
            </div>

            <div data-aos="fade-up">
              <img
                className={styles["about-us__description-img"]}
                src="/img/3d-logo.gif"
                alt="trust-desktop"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
