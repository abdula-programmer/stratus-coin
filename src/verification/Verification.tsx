import React from "react";
import styles from "./Verification.module.css";
import stylesGeneral from "../styles.module.css";

const Verification = () => {
  return (
    <div className={styles["verification"]} id="verify">
      <div className={stylesGeneral["container"]}>
        <h1 className={stylesGeneral["title-block"]}>Верификация</h1>

        <div className={styles["verification-info"]}>
          <div className={styles["verification-left"]}>
            <p
              className={`${styles["verification-description"]} ${stylesGeneral["block-text"]}`}
            >
              Верификация форвардных сделок на площадке имеет детальную
              структуру аудита, с выделением точных позиций обеспечения
              участниками последующих сделок ликвидным имуществом
              пропорционально общей стоимости смарт контракта. Общая
              капитализация площадки обеспечивает стабильный рост курса валюты.
            </p>

            <ul className={styles["mico-list"]}>
              <li className={styles["mico-item"]} data-aos="fade-up">
                <img
                  className={styles["mico-item-img"]}
                  src="/img/kyc.png"
                  alt="kyc"
                />
                <h4 className={styles["mico-item-description"]}>KYC</h4>
              </li>
              <li
                className={styles["mico-item"]}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  className={styles["mico-item-img"]}
                  src="/img/kyb.png"
                  alt="kyc"
                />
                <h4 className={styles["mico-item-description"]}>KYB</h4>
              </li>
              <li
                className={styles["mico-item"]}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <img
                  className={styles["mico-item-img"]}
                  src="/img/kyt.png"
                  alt="kyc"
                />
                <h4 className={styles["mico-item-description"]}>KYT</h4>
              </li>
              <li
                className={styles["mico-item"]}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <img
                  className={styles["mico-item-img"]}
                  src="/img/aml.png"
                  alt="kyc"
                />
                <h4 className={styles["mico-item-description"]}>AML</h4>
              </li>
            </ul>
          </div>

          <div className={styles['verification-img-block']}>
            <img
              className={styles["verification-img"]}
              src="/img/verification.jpg"
              alt="verification"
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
