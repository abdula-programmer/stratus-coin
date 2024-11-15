import React from "react";
import styles from "./Card-charakter.module.css";
import { motion, Variants } from "framer-motion";
import Marquee from "react-fast-marquee";

interface Props {
  text: string;
  month: string;
  img: string;
  index: number;
}

const cardVariants = (index: number): Variants => {
  const variants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: index * 0.5,
      },
    },
  };

  return variants;
};

const Card = ({ text, month, img, index }: Props) => {
  return (
    <motion.div className={styles["card-container"]}>
      <motion.div className={styles["card"]} variants={cardVariants(index)}>
        <div className={styles["character-title"]}>
          <img
            src={`/img/${img}.png`}
            alt={img}
            className={styles["img-card"]}
          />
          <h4>{month}</h4>
        </div>
        <div>{text}</div>
      </motion.div>
    </motion.div>
  );
};

const chronology: [string, string, string][] = [
  [
    "march",
    "Март 2024",
    "Был запущен тест первой собственной площадки для торговли крипто валютой.",
  ],
  [
    "april",
    "Апрель 2024",
    "Разработан безопасный регламент партнёрских сделок на площадке Stratus при увеличении капитализации монеты.",
  ],
  [
    "may",
    "Май 2024",
    "Запущен тест маршрутизаторов ещё двух уникальных площадок для обмена Stratus, обеспечивающий стабильный рост и привликательность крипто валюты.",
  ],
  [
    "june",
    "Июнь 2024",
    "Были заключены выгодные партнёрские соглашения, укрепившие позиции монеты.",
  ],
  [
    "july",
    "Июль 2024",
    "Подготовка к листинку монеты. Оценка рынка продаж и формирование перспективных смарт-контрактов.",
  ],
  [
    "august",
    "Август 2024",
    "Формирование требований безопасности при верификации пользователей (Crypto Regulation Mica). Запуск монеты в обращение.",
  ],
  [
    "september",
    "Сентябрь 2024",
    "Увеличение капитализации монеты, закрепление монеты на бирже, стейкинг монеты.",
  ],
  [
    "oсtober",
    "Октябрь 2024",
    "Перспективный рост монет. Увеличение партнерских сделок. Полноценный ввод и вывод монеты.",
  ],
];

const CardCharacter = () => {
  return (
    <div className={styles["card-character"]}>
      <Marquee  speed={90} pauseOnHover pauseOnClick className={styles["character-cards"]}>
        {chronology.map(([img, month, text], index) => (
          <Card img={img} text={text} month={month} index={index + 0.5} />
        ))}
      </Marquee>
    </div>
  );
};

export default CardCharacter;
