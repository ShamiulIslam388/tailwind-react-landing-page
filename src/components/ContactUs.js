import React from "react";
import Button from "../utilities/Button";

const ContactUs = () => {
  return (
    <div className="bg-bookmark-purple text-white py-20">
      <section className="container">
        <div className="sm:w-3/4 lg:w-1/2 mx-auto">
          <p className="uppercase text-center mb-8 font-semibold">
            35,000+ ALREADY JOINED
          </p>
          <h1 className="text-2xl sm:text-3xl text-center">
            Stay up-to-date with what we’re doing
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <input
              type="text"
              placeholder="Enter your Email addredd"
              className="focus:outline-none flex-1 p-3 rounded-md text-black"
            />
            <button
              type="button"
              className="btn btn-purple mt-0 bg-bookmark-red hover:bg-bookmark-white hover:text-bookmark-purple"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
