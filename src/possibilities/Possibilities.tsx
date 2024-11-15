import React from "react";
import stylesGeneral from "../styles.module.css";
import styles from "./Possibilities.module.css";
import CustomList from "./CustomList";

const Possibilities = () => {
  return (
    <div className={styles["possibilities"]} id="possibilities">
      <div className={stylesGeneral["container"]}>
        <h1
          className={`${stylesGeneral["title-block"]} ${styles["title-block"]}`}
        >
          Возможности
        </h1>

        <div
          data-aos="fade-down"
          className={`${stylesGeneral["block-text"]} ${styles["possibilities-text"]} `}
        >
          Новая криптовалюта Stratus имеет реальные показатели ликвидности и
          конкурентоспособность на крипторынке. Монета имеет большие возможности
          для роста. Stratus Coin разработан для работы на трёх собственных
          платформах, каждая из которых предлагает уникальные функции, что
          позволяет легко интегрировать платформу с Dex структурой, расширить
          аудиторию пользователей и нарастить капитализацию в успешном развитии
          Stratus платформы.
        </div>

        <CustomList />
      </div>
    </div>
  );
};

export default Possibilities;
