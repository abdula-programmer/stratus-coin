import React from "react";
import styles from "./HeaderBlock.module.css";
import Video from "./Video";
import stylesGeneral from "../styles.module.css";

const HeaderBlock = () => {
  return (
    <div className={styles["header-block"]} id="header-block">
      <div className={`${stylesGeneral["container"]} ${styles["container"]}`}>
        <div className={styles["header-block__text"]}>
          <div className={styles["header-block__title"]}>
            Добро пожаловать в Stratus Coin <br />В криптовалюту будущего
          </div>
          <div className={styles["header-block__description"]}>
            Stratus coin – децентрализованный стейблкоин в структуре
            самостоятельной капитализации основанной на внутренней регистрации
            смарт контрактов внутри системы торговых площадок. Монета обеспечена
            ликвидным имуществом торговых сделок основанных на встречных
            требованиях
          </div>

          <a
            className={styles["log-in__button"]}
            href="https://stratuscoin.ru/auth"
          >
            Личный кабинет
          </a>
        </div>
      </div>
      <Video />
    </div>
  );
};

export default HeaderBlock;
