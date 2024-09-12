import React from "react";
import styles from "./styles.module.scss";
import { Describers } from "../../entities/Describers";
import Diamond from "../../assets/diamond.svg";
import People from "../../assets/people.svg";
import Ecology from "../../assets/ecology.svg";

export const AboutScreen = () => {
  return (
    <>
      <div className="about_screen">
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
        <div className="about_icons">
          <Describers className={styles.diamond} img={Diamond} text="lorem" />
          <Describers className={styles.people} img={People} text="lorem" />
          <Describers className={styles.ecology} img={Ecology} text="lorem" />
        </div>
      </div>
    </>
  );
};
