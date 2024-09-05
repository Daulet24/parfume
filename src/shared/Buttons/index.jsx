import React from "react";

export const Button = ({ href, className, text }) => {
  return (
    <button href={href} className={className}>
      {text}
    </button>
  );
};
