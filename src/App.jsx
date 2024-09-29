import React, { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans">
      <Nav />
      <Hero />
      <Product />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
