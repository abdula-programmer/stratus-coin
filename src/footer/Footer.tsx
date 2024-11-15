import React from "react";
import styles from "./Footer.module.css";
import stylesGeneral from "../styles.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={stylesGeneral["container"]}>
        <div className={styles["footer-top"]}>
          <div className={styles["footer-logo"]}>
            <img src="/img/logo.png" />
            <div className={styles["footer-logo__inscription"]}>
              {" "}
              Stratus coin
            </div>
          </div>

          <div className={styles['copy']}>All rights reserved. © 2024 Stratus Coin.
            </div>


          <div className={styles["footer-contacts"]}>
            <div className={styles["footer-contacts-title"]}>Наши контакты</div>
            <ul className={styles["contacts-list"]}>
              <li className={styles["contact"]}>
                <a href="" className={styles["contact-link"]}>
                  <BsFillTelephoneFill className={styles["contact-logo"]} />
                </a>
              </li>
              <li className={styles["contact"]}>
                <a href="" className={styles["contact-link"]}>
                  <FaTelegramPlane className={styles["contact-logo"]} />
                </a>
              </li>
              <li className={styles["contact"]}>
                <a href="" className={styles["contact-link"]}>
                  <MdEmail className={styles["contact-logo"]} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
