import React, { Dispatch, SetStateAction } from "react";
import styles from "./NavList.module.css";
import BurgerIcon from "./BurgerIcon";
import { CiLogin } from "react-icons/ci";

interface IActive {
  isActive: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const NavList = ({ isActive, setActive }: IActive) => {
  const toggle = () => setActive(!isActive)
  
  return (
    <nav className={styles["nav"]}>
      <BurgerIcon isOpen={isActive} toggle={toggle}/>
      
      <ul
        className={
          isActive
            ? `${styles["nav-list"]} ${styles["active"]}`
            : `${styles["nav-list"]}`
        }
      >
        <li>
          <a href="#header-block">Главная</a>
        </li>
        <li>
          {" "}
          <a href="#about-us">О нас</a>
        </li>
        <li>
          <a href="#chronology">Хронология</a>
        </li>
        <li>
          <a href="#platform">Платформа</a>
        </li>
        <li>
          <a href="#importance">Важность</a>
        </li>
        <li>
          <a href="#possibilities">Возможности</a>
        </li>
        <li>
          <a href="#invest">Инвестиции</a>
        </li>
        <li>
          <a href="#verify">Верификация</a>
        </li>
        <li>
          <a href="#liqudity">Ликвидность</a>
        </li>
        <li className={styles['auth']}>
          <a href="https://stratuscoin.ru/auth">
            <span className={styles['auth_text']}>
              Личный кабинет
            </span>
            <CiLogin />
          </a>
        </li>
        {/* <li><a href="#contacts">Контакты</a></li> */}
      </ul>
    </nav>
  );
};

export default NavList;
