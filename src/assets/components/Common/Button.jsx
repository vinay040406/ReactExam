import React from "react";

const Button = ({ padding, text, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${padding} hover:scale-102 text-xl font-medium `}
    >
      {text}
    </button>
  );
};

export default Button;
