import React from "react";
import styles from "./styles.module.scss";
import Logo from "../../assets/logo.png";
import { Button } from "../../shared/Buttons";
import { NavLink } from "../../shared/NavLink";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr />
      <div className={styles.footer__container}>
        <img className={styles.logo} src={Logo} alt="image" />
        <div className={styles.footer__links}>
          <NavLink text="Главная" />
          <NavLink text="Подарки" />
          <NavLink text="Опт" />
          <NavLink text="Каталог" />
          <NavLink text="О нас" />
          <NavLink text="Контакты" />
        </div>
        <Button className={styles.footer_btn} text="Заказать" />
      </div>
    </footer>
  );
};
