import React from "react";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Contacts/>
      <Footer/>
    </div>
  );
};

export default App;
