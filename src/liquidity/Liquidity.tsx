import React from "react";
import styles from "./Liquidity.module.css";
import stylesGeneral from "../styles.module.css";

const Liquidity = () => {
  return (
    <div className={styles["liqudity"]} id="liqudity">
      <div className={stylesGeneral["container"]}>
        <h1 className={stylesGeneral["title-block"]}>Ликвидность монеты</h1>

        <div className={styles["liqudity-info"]}>
          <div className={styles['liqudity-info-block']}>
            <img
              className={styles["liqudity-img"]}
              src="/img/liqudity.png"
              alt=""
            />
          </div>

          <p className={stylesGeneral["block-text"]}>
            В тестовый период при модуляуии маршрутизатора Dex Slb монета
            показала стабильный рост капитализации. Были проанализированы
            основные принципы работы монеты и ее отличие от других криптовалют.
            Тестовые графики четко демонстрируют устойчивое увеличение стоимости
            монеты Stratus. Данные показатели свидетельствуют о надежности
            инвестиций в Stratus Coin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Liquidity;
