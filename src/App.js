import React, { Fragment } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Download from "./components/Download";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <ContactUs />
      <Footer />
    </Fragment>
  );
}

export default App;
