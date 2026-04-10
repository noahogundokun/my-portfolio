import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Project from "./components/projects";
import Home from "./components/Home";
import Skills from "./components/Skills";
import WhatsappFloat from "./components/WhatsappFloat";
import HireMeFloat from "./components/HireMeFloat";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function APP() {
  return (
    <div className="APP">
      <h2>Welcome to my portfolio</h2>
      <Navbar />
      <Home />
      <About />
      <WhatsappFloat />
      <HireMeFloat />
      <Skills/>
      <Project />
      <Services />
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  );
}
export default APP;
