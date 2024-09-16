import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header } from "../Header";
import { Slider } from "../../shared/Slider";
import { Footer } from "../Footer";
import { Button } from "../../shared/Buttons";
import styles from "./styles.module.scss";

const CatalogPage = () => {
  return (
    <div className={styles.newpage}>
      <Header />
      <div className={newpage_btn}>
        <Button text="Кнопка" />
        <Button text="Кнопка" />
        <Button text="Кнопка" />
        <Button text="Кнопка" />
        <Button text="Кнопка" />
        <Button text="Кнопка" />
        <Button text="Кнопка" />
      </div>
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Footer />
    </div>
  );
};

export default CatalogPage;
