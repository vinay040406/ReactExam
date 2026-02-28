import React from "react";

const Button = ({ padding, text, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${padding} hover:scale-102 text-xl font-medium duration-200 ease-in-out transition-all`}
    >
      {text}
    </button>
  );
};

export default Button;
