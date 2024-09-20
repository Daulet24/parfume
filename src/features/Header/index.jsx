import React from "react";
import { NavLink } from "../../shared/NavLink";
import styles from "./styles.module.scss";
import Cash from "../../assets/cash.png";
import BurgerMenu from "../BurgerMenu";
import Logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <img className={styles.logo} src={Logo} alt="//" />
        <NavLink href="/MainPage" text="Главная" className={styles.NavLinks} />
        <NavLink
          href="/catalog"
          text="Корпроративные подарки"
          className={styles.NavLinks}
        />
        <NavLink href="/catalog" text="Опт" className={styles.NavLinks} />
        <NavLink href="/catalog" text="Категории" className={styles.NavLinks} />
        <NavLink href="/catalog" text="Товары" className={styles.NavLinks} />
        <NavLink href="/inform" text="Контакты" className={styles.NavLinks} />
        <img className={styles.cash} src={Cash} alt="" />
      </header>
      <header className={styles.header_mob}>
        <img src={Logo} alt="image" width="190px" />
        <BurgerMenu />
      </header>
    </>
  );
};
