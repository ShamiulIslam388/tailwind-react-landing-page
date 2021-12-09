import React from "react";
import Heading from "../utilities/Heading";
import FaqItem from "../utilities/FaqItem";
import { Faqs } from "../Data";
import Button from "../utilities/Button";

const FAQ = () => {
  return (
    <section className="bg-bookmark-white py-20">
      <div className="container">
        <Heading
          title="Frequently Asked Questions"
          text="Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us."
        />
        <div className="flex flex-col mx-auto mt-12 sm:w-3/4 lg:w-5/12">
          {Faqs.map((faq, index) => {
            return <FaqItem key={index} faq={faq} />;
          })}
          <div className="self-center">
            <Button title="More Info" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
