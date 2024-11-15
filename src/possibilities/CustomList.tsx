import React, { useEffect, useState } from "react";
import styles from "./Possibilities.module.css";
import MotionAnimate from "./MotionAnimate";
import { useTransition, animated, config } from "@react-spring/web";

interface structData {
  id: number;
  text: string;
  targetValue: number;
  currency: string;
  aos: string;
}

const shuffleArray = (array: structData[]): structData[] => {
  let newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const initialData: structData[] = [
  {
    id: 1,
    text: "предполагаемый рост номинала монеты на старте листинга",
    targetValue: 26,
    currency: "%",
    aos: "fade-right",
  },
  {
    id: 2,
    text: "USDT (Erc20) текущая капитализация",
    targetValue: 221,
    currency: "млн",
    aos: "fade-up",
  },
  {
    id: 3,
    text: "последующий прирост после старта листинга",
    targetValue: 7,
    currency: "%",
    aos: "fade-down",
  },
  {
    id: 4,
    text: "перспективный рост форвардных сделок",
    targetValue: 75,
    currency: "%",
    aos: "fade-up",
  },
  {
    id: 5,
    text: "ликвидные платформы",
    targetValue: 3,
    currency: "",
    aos: "fade-up",
  },
];

const CustomList = () => {
  const [data, setData] = useState<structData[]>(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => shuffleArray(prevData));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const transitions = useTransition(data, {
    keys: data.map((item) => item.id),
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
    leave: { opacity: 0, transform: "translate3d(0,40px,0)" },
    config: config.stiff,
  });

  return (
    <ul className={styles["capiptal-list"]}>
      {transitions((style, item) => (
        <animated.li style={style} className={styles["capital"]} data-aos={item.aos}>
          <div className={styles["animate-block"]}>
            <MotionAnimate targetValue={item.targetValue} />
            {item.currency}
          </div>
          <div className={styles["capital-text"]}>{item.text}</div>
        </animated.li>
      ))}
    </ul>
  );
};

export default CustomList;
