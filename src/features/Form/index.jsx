import React from "react";
import styles from "./styles.module.scss";
import Contact from "../../assets/contact.png";

export const Form = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>Свяжитесь с нами</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          consequatur illo, sequi repudiandae sit tempore rerum aspernatur
          officia modi non placeat dolore quis, inventore praesentium autem
          facilis? Error, expedita unde.
        </p>
        <form>
          <label>
            <input
              className={styles.name}
              placeholder="Ваше имя"
              type="text"
              name="name"
            />
          </label>
          <br />
          <br />
          <label>
            <input
              className={styles.phone}
              placeholder="Ваш телефон"
              type="tel"
              name="phone"
            />
          </label>
          <br />
          <button className={styles.form_btn} type="submit">
            Отправить
          </button>
        </form>
        <div className={styles.contact_Info}>
          <p>example@example.com</p>
          <p>+123456789</p>
        </div>
      </div>
      <div className={styles.form_img}>
        <img src={Contact} alt="Festive candles" />
      </div>
    </div>
  );
};
