import React, { useEffect, useState } from "react";

import Header from "./header";
import Footer from "./footer";

import styles from "./App.module.css";
import HeaderBlock from "./headerBlock";
import AboutUs from "./aboutUs";
import Chronology from "./chronology";
import Platform from "./platform";
import Possibilities from "./possibilities";
import Invest from "./invest";
import Feedback from "./feedback";
import AOS from "aos";
import "aos/dist/aos.css";
import ImportanceCoin from "./importanceCoin";
import UnicumPlatform from "./unicumPlatform";
import StructAnaliz from "./structAnaliz";
import Verification from "./verification";
import Liquidity from "./liquidity";
import Lenta from "./lenta";
import Preloader from "./preloader";

function App() {
  const [isActivePreloader, setActivePreloader] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
    });

    document.body.classList.add("active-preloader");

    setTimeout(() => {
      document.body.classList.remove("active-preloader");

      setActivePreloader(false);
    }, 5000);
  }, []);

  return (
    <div className={styles["app"]}>
      {isActivePreloader ? <Preloader /> : null}
      <Header />
      <main>
        <HeaderBlock />
        <AboutUs />
        <Chronology />
        <Platform />
        <ImportanceCoin />
        <UnicumPlatform />
        <Possibilities />
        <StructAnaliz />
        <Invest />
        <Verification />
        <Lenta />
        <Liquidity />
        <Feedback />
      </main>
      <Footer />
    </div>
  );
}

export default App;
