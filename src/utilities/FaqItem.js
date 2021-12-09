import React from "react";
import { BiChevronDown } from "react-icons/bi";

const FaqItem = ({ faq }) => {
  return (
    <div className="flex items-center border-b py-4">
      <span className="flex-1">{faq.question}</span>
      <BiChevronDown className="text-bookmark-purple text-2xl cursor-pointer" />
    </div>
  );
};

export default FaqItem;
