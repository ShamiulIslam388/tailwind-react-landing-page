import React from "react";
import Button from "./Button";

const Card = ({ b_img, title, text }) => {
  return (
    <div className="flex flex-col rounded-md shadow-md">
      <div className="p-6 flex flex-col items-center">
        <img src={b_img} alt="brower-image" />
        <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">{title}</h3>
        <p className="mb-2 text-bookmark-grey font-light">{text}</p>
      </div>
      <hr className="border-b border-bookmark-white" />
      <div className="flex p-6 pt-2 items-center justify-center">
        <Button title="Add & Install Extension" />
      </div>
    </div>
  );
};

export default Card;
