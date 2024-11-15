import React from 'react';
import styles from './NavList.module.css';

interface BurgerIconProps {
  isOpen: boolean;
  toggle: () => void;
}

const BurgerIcon = ({ isOpen, toggle }: BurgerIconProps) => (
  <div className={styles.burgerContainer} onClick={toggle}>
    <div className={`${styles.line} ${isOpen ? styles.line1 + ' ' + styles.open : ''}`}></div>
    <div className={`${styles.line} ${isOpen ? styles.line2 + ' ' + styles.open : ''}`}></div>
    <div className={`${styles.line} ${isOpen ? styles.line3 + ' ' + styles.open : ''}`}></div>
  </div>
);

export default BurgerIcon;