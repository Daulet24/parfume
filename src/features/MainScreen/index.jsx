import React from "react";
import { Button } from "../../shared/Buttons";
import Photo from "../../assets/parfume.png/";
import Parfume from "../../assets/parfume_2.png";
import styles from "./styles.module.scss";

export const MainScreen = () => {
  return (
    <>
      <h1 className={styles.main_text}>
        СВЕТ И АРОМАТ: <br /> ИСКУССТВО СОЗДАВАТЬ АТМСОСФЕРУ
      </h1>
      <div className={styles.about}>
        <img src={Photo} alt="/" className={styles.image} />
        <div className={styles.about_info}>
          <p>
            Погрузитесь в атмосферу гармонии и уюта с нашими премиальными
            ароматическими свечами. Каждая свеча — это искусство, созданное
            вручную с использованием только лучших натуральных компонентов и
            уникальных ароматов, которые наполнят ваше пространство теплом и
            спокойствием.
          </p>
          <div className={styles.buttons}>
            <Button className={styles.btn_main} text="Заказать" />
            <Button className={styles.btn_catalog} text="Каталог" />
          </div>
        </div>
        <img src={Parfume} alt="/" className={styles.image} />
      </div>
    </>
  );
};
