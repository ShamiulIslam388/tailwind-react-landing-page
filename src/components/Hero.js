import React from "react";
import HeroImage from "../images/hero-bg.png";
const Hero = () => {
  return (
    <section className="relative">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="text-bookmark-blue text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
            A Simple Bookmark Manager
          </h2>
          <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <button
              type="button"
              className="btn btn-purple hover:bg-bookmark-white 
               hover:text-bookmark-purple"
            >
              Get it on Google
            </button>
            <button className="btn btn-white hover:bg-bookmark-purple hover:text-white">
              Get it on Firefox
            </button>
          </div>
        </div>
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img src={HeroImage} alt="hero" className="image-class" />
        </div>
      </div>
      <div className="hidden md:block overflow-hidden bg-bookmark-purple rounded-l-full absolute h-80 w-2/4 right-0 top-34 lg:-bottom-28 lg:-right-36"></div>
    </section>
  );
};

export default Hero;
