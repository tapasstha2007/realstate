import React from "react";
import { assets, projectsData } from "../assets/assets";

const Projects = () => {
  return (
    <div className="" id="Projects">
      <div className="text-center mt-36">
        <h1 className="font-bold text-4xl">
          Projects <span className="underline font-light">Complected</span>
        </h1>
        <p className="opacity-70 mt-3">
          Crafting Spaces, Building Legacies-Explore <br />
          <span>Our Portfolio</span>
        </p>
      </div>
      <div className="flex justify-end items-center mb-8">
        <button
          className="p-3 bg-gray-200 rounded mr-2  "
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          className="p-3 bg-gray-200 rounded mr-2  "
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>
      <div className="overflow-hidden">
        <div>
          {projectsData.map((project, index) => (
            <div key={index}>
              <img src={project.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
