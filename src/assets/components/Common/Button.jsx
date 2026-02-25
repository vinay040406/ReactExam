import React from "react";

const Button = ({ padding, text, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${padding} hover:scale-102 text-white text-xl font-medium bg-[rgba(1,198,181,1)]`}
    >
      {text}
    </button>
  );
};

export default Button;
