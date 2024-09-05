import React from "react";

export const NavLink = ({ href, className, text }) => {
  return (
    <a href={href} className={className}>
      {text}
    </a>
  );
};
