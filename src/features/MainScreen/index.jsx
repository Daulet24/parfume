import React from "react";
import { Button } from "../../shared/Buttons";
import Photo from "../../assets/parfume.png/";
import Parfume from "../../assets/parfume_2.png";

export const MainScreen = () => {
  return (
    <>
      <div className={MainScreen}>
        <h1>Свет и аромат: искусство создавать атмосферу</h1>
        <div className={about}>
          <img src={Photo} alt="" />
          <div className={about_info}>
            <p></p>
            <Button text="Заказать" />
            <Button text="Каталог" />
          </div>
          <img src={Parfume} alt="" />
        </div>
      </div>
    </>
  );
};
