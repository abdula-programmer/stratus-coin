import React from "react";
import styles from "./Platform.module.css";
import stylesGeneral from "../styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Platform = () => {
  return (
    <div className={styles["platform"]} id="platform">
      <div className={stylesGeneral["container"]}>
        <h1
          className={`${stylesGeneral["title-block"]} ${styles["title-platform"]}`}
        >
          Платформа Stratus
        </h1>
        <div
          className={`${styles["levels-block-text"]} ${stylesGeneral["block-text"]}`}
          data-aos="fade-left"
        >
          Stratus платформа состоит из трех синхронизированных площадок имеющих
          плавающий код исполнения внутренней базы смарт контрактов
        </div>

        <div className={styles["levels-block"]}>
          <Swiper
            modules={[Pagination, Navigation]}
            slidesPerView={1}
            className={styles["levels"]}
            pagination={{
              clickable: true,
              bulletClass: styles["swiper-pagination-bullet"],
              bulletActiveClass: styles["swiper-pagination-bullet-active"],
            }}
            wrapperClass={styles["wraper"]}
            navigation={{
              nextEl: `.${styles["arrow-right"]}`,
              prevEl: `.${styles["arrow-left"]}`,
            }}
          >
            <SwiperSlide className={styles["level"]}>
              <h2 className={styles["level-title"]}>Уровень 1</h2>
              <div className={styles["level-description"]}>
                {/* <div className={styles["level-icon"]}>
                  <img src="/img/exchenge.png" alt="level1" />
                </div> */}
                <p className={styles["level-text"]}>
                  Закрепление выделенного номинала смарт контрактов для обмена
                  текущими и перспективными сделками. Также, Dex SIb модуль
                  обеспечивает синхронизацию работы с маркетплейсами и Dex
                  обменниками.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles["level"]}>
              <h2 className={styles["level-title"]}>Уровень 2</h2>
              <div className={styles["level-description"]}>
                {/* <div className={styles["level-icon"]}>
                  <img src="/img/smart-contract.png" alt="level1" />
                </div> */}
                <p className={styles["level-text"]}>
                  Уровень с отдельным размещением форварда, который
                  капитализируется на Dex SIb платформе с взаимными расчётами
                  при закрытии смарт контрактов, централизованными сделками
                  внутри системы Stratus Coin.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles["level"]}>
              <h2 className={styles["level-title"]}>Уровень 3</h2>
              <div className={styles["level-description"]}>
                {/* <div className={styles["level-icon"]}>
                  <img src="/img/kriptolending.png" alt="level1" />
                </div> */}
                <p className={styles["level-text"]}>
                  Распределение средств текущих смартконтрактов в структурный
                  фонд криптостейкинга. Работа структурного фонда с
                  синхронизацией Dex торговых площадок, через криптостейкинг.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={styles["arrows"]}>
        <div className={styles["arrow-left"]}>
          <img src="/img/arrow.png" className={styles["arrow-img"]}  alt=""/>
        </div>
        <div className={styles["arrow-right"]}>
          <img src="/img/arrow.png" className={styles["arrow-img"]} alt=""/>
        </div>
      </div>



    </div>
  );
};

export default Platform;
