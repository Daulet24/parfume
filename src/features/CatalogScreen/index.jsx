import Slider from "../../shared/Slider";
import logo from "../../assets/logo.png";
import parfume2 from "../../assets/parfume_2.png";
import parfume from "../../assets/parfume.png";
import styles from "./styles.module.scss";
import { Button } from "../../shared/Buttons";

const CatalogScreen = () => {
  const images = [logo, parfume2, parfume];

  return (
    <div className={styles.catalog_screen}>
      <div className={styles.catalog_components}>
        <div className={styles.catalog_text}>
          <h1>Каталог</h1>
          <p>
            Погрузитесь в атмосферу гармонии и уюта с нашими <br />
            премиальными ароматическими свечами. Каждая свеча — это <br />
            искусство, созданное вручную с использованием только лучших.
          </p>
        </div>
        <Button className={styles.catalog_btn} text="Весь каталог" />
      </div>
      <Slider img={images} />
    </div>
  );
};

export default CatalogScreen;
