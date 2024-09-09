import React from "react";
import { NavLink } from "../../shared/NavLink";
import styles from "./styles.module.scss";
import Logo from "../../assets/logo.png";
import Cash from "../../assets/cash.png";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <img className={styles.logo} src={Logo} alt="//" />
        <NavLink href="a" text="Главная" className={styles.NavLinks} />
        <NavLink
          href="a"
          text="Корпроративные подарки"
          className={styles.NavLinks}
        />
        <NavLink href="a" text="Опт" className={styles.NavLinks} />
        <NavLink href="a" text="Категории" className={styles.NavLinks} />
        <NavLink href="a" text="Товары" className={styles.NavLinks} />
        <NavLink href="a" text="Контакты" className={styles.NavLinks} />
        <img className={styles.cash} src={Cash} alt="" />
      </header>
    </>
  );
};
