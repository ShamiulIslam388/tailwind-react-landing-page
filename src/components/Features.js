import React from "react";
import Heading from "../utilities/Heading";

import Section from "../utilities/Section";

import Features1 from "../images/illustration-features-tab-1.png";
import Features2 from "../images/illustration-features-tab-2.png";
import Features3 from "../images/illustration-features-tab-3.png";

const Features = () => {
  return (
    <section className="bg-bookmark-white py-20 mt-20 lg:mt-60 lg:pb-44">
      <Heading
        title="Features"
        text="Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
      />
      <Section
        img={Features1}
        title="Bookmark in one click"
        text="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
        mt="24"
        posb="bottom"
        pos2="left"
      />
      <Section
        img={Features2}
        title="Intelligent search"
        text="Our powerful search feature will help you find saved sites in no time at all. No need to crawl through all of your bookmarks."
        mt="52"
        posb="bottom"
        pos2="right"
        reverse="reverse"
        rounded="left"
      />
      <Section
        img={Features3}
        title="Share your bookmarks"
        text="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
        mt="52"
        posb="bottom"
        pos2="left"
      />
    </section>
  );
};

export default Features;
