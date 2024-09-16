import React, { useState } from "react";
import styles from "./styles.module.scss";
import { NavLink } from "../../shared/NavLink";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`${styles.burgerIcon} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <ul>
          <NavLink className={styles.burger_links} text="Main" />
          <NavLink className={styles.burger_links} text="About us" />
          <NavLink className={styles.burger_links} text="Team" />
          <NavLink className={styles.burger_links} text="Contacts" />
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenu;
