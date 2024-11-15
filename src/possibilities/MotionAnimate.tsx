import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from './Possibilities.module.css'

interface AppProps {
  targetValue: number;
}

const MotionAnimate: React.FC<AppProps> = ({ targetValue }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef<HTMLHeadingElement>(null);
  const duration = Math.max(2, 3 - Math.log10(targetValue)); // Уменьшаем продолжительность для больших чисел

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          const animation = animate(count, targetValue, { duration });
          return () => animation.stop();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [count, duration, targetValue]);

  return <motion.h3 className={styles['motion-animate']} ref={ref}>{rounded}</motion.h3>;
};

export default MotionAnimate;