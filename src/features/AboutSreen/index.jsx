import React from "react";
import styles from "./styles.module.scss";
import Diamond from "../../assets/diamond.png";
import Ecology from "../../assets/ecology.png";

export const AboutScreen = () => {
  return (
    <>
      <div className={styles.about_screen}>
        <div className={styles.about_text}>
          <span className={styles.about_title}>О нас</span>
          <p>
            Добро пожаловать в Candle Space — ваш идеальный уголок для
            уникальных ароматических свечей, созданных с любовью и вниманием к
            каждой детали. Наша цель — приносить уют и гармонию в вашу жизнь с
            помощью исключительных ароматов, которые создают настроение и дарят
            мгновения истинного наслаждения.
          </p>
        </div>
        <div className={styles.about_icons}>
          <div className={styles.about_card}>
            <img src={Diamond} alt="image" />
            <name>КАЧЕСТВО</name>
            <p>Только лучшие ингредиенты и экологически чистые материалы.</p>
          </div>
          <div className={styles.about_card}>
            <img src={Ecology} alt="image" />
            <name>КАЧЕСТВО</name>
            <p>олько лучшие ингредиенты и экологически чистые материалы.</p>
          </div>
          <div className={styles.about_card}>
            <img src={Ecology} alt="image" />
            <name>КАЧЕСТВО</name>
            <p>олько лучшие ингредиенты и экологически чистые материалы.</p>
          </div>
        </div>
      </div>
    </>
  );
};
