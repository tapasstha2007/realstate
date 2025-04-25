import React from "react";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default App;
