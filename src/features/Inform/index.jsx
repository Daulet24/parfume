import React from "react";
import { Header } from "../Header";
import { Form } from "../Form";
import { Footer } from "../Footer";
import styles from "./styles.module.scss";
import { NavLink } from "../../shared/NavLink";

export const Inform = () => {
  return (
    <>
      <Header />
      <div className={styles.navlinks_container}>
        <NavLink className={styles.links} href="/MainPage" text="Главная" />
        <NavLink className={styles.links} href="/MainPage" text="/" />
        <NavLink className={styles.links} href="/" text="Каталог" />
        <NavLink className={styles.links} href="/" text="/" />
        <NavLink
          className={styles.links}
          href="/"
          text="Лимитированные коллекции"
        />
      </div>
      <Form />
      <Footer />
    </>
  );
};
