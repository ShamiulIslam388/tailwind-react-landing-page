import React from "react";

const Button = ({ title }) => {
  return (
    <button
      type="button"
      className="btn btn-purple hover:bg-bookmark-white 
hover:text-bookmark-purple"
    >
      {title}
    </button>
  );
};

export default Button;
