import React from "react";
import styles from "./styles.module.scss";

export const Card = ({ icon, title, text }) => {
  return (
    <>
      <div className={className}>
        {<img src={icon} alt="image" className={styles.describers_img} />}
        <span className={styles.describers_title}>{title}</span>
        <span className={styles.describers_text}>{text}</span>
      </div>
    </>
  );
};
