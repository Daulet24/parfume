import React from "react";

export const Card = ({ img, text, className, price, name }) => {
  return (
    <>
      <div className={className}>
        <img />={img}
        <text />={text}
        <name /> = {name}
        <price />={price}
      </div>
    </>
  );
};
