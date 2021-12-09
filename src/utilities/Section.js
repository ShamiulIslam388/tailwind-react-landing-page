import React from "react";
import Button from "./Button";

const Section = ({ img, title, text, mt, posb, pos2, reverse, rounded }) => {
  return (
    <div className={`relative mt-20 lg:mt-${mt}`}>
      <div
        className={`container flex flex-col ${
          reverse === "reverse" ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center justify-center gap-x-24`}
      >
        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
          <img src={img} alt="features-1" className="image-class" />
        </div>
        <div className="flex flex-1 flex-col items-center lg:flex-start">
          <h1 className="text-3xl text-bookmark-blue mb-4">{title}</h1>
          <p className="text-bookmark-grey text-center lg:text-left sm:w-3/4 lg:w-full">
            {text}
          </p>
          <Button title="More Info" />
        </div>
      </div>
      <div
        className={`hidden lg:block lg:overflow-hidden bg-bookmark-purple ${
          rounded === "left" ? "rounded-l-full" : "rounded-r-full"
        } absolute h-80 w-2/4  -${posb}-24 -${pos2}-36`}
      ></div>
    </div>
  );
};

export default Section;
