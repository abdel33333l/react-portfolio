import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Experiance from "./components/experiance/Experiance";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experiance />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
