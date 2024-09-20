import React from "react";
import styles from "./styles.module.scss";

export const Card = ({ img, title, className, price, name }) => {
  return (
    <>
      <div className={styles.card_container}>
        {<img src={img} alt="image" className={styles.card_img} />}
        <span className={styles.card_name}>{name}</span>
        <span className={styles.card_title}>{title}</span>
        <span className={styles.card_price}>{price}</span>
      </div>
    </>
  );
};
