import React from "react";
import Heading from "../utilities/Heading";
import Card from "../utilities/Card";
import ChromeImage from "../images/logo-chrome.svg";
import FireFoxImage from "../images/logo-firefox.svg";
import OperaImage from "../images/logo-opera.svg";

const Download = () => {
  return (
    <section className="py-20 mt-20">
      <Heading
        title="Download the extension"
        text="We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize."
      />
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
        <Card
          b_img={ChromeImage}
          title="Add to Chrome"
          text="Minimum Version 62"
        />
        <Card
          b_img={FireFoxImage}
          title="Add to Firefox"
          text="Minimum Version 62"
        />
        <Card
          b_img={OperaImage}
          title="Add to Opera"
          text="Minimum Version 62"
        />
      </div>
    </section>
  );
};

export default Download;
