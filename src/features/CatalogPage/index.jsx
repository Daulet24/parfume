import React from "react";
import { Header } from "../Header";
import { Slider } from "../../shared/Slider";
import { Footer } from "../Footer";
import { Button } from "../../shared/Buttons";
import styles from "./styles.module.scss";
import { NavLink } from "../../shared/NavLink";

const CatalogPage = () => {
  return (
    <div className={styles.newpage}>
      <Header />
      <div className={styles.navlinks_container}>
        <NavLink className={styles.links} href="/MainPage" text="Главная" />
        <NavLink className={styles.links} href="/MainPage" text="/" />
        <NavLink className={styles.links} href="/" text="Каталог" />
      </div>
      <div className={styles.container_btn}>
        <Button className={styles.catalog_btn} text="Заказать" />
        <Button className={styles.catalog_btn} text="Заказать" />
        <Button className={styles.catalog_btn} text="Заказать" />
        <Button className={styles.catalog_btn} text="Заказать" />
        <Button className={styles.catalog_btn} text="Заказать" />
        <Button className={styles.catalog_btn} text="Заказать" />
      </div>
      <div className={styles.slider_container}>
        <Slider />
        <br />
        <Slider />
        <br />
        <Slider />
        <br />
        <Slider />
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default CatalogPage;
