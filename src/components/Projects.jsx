import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";
const Projects = () => {

  const [currentIndex, setcurrentIndex] = useState(0)
  const [cardsToShow, setcardsToShow] = useState(1)

  const nextProject = () => {
    setcurrentIndex((prevIndex)=> {
      if (prevIndex === projectsData.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }

    }
    )
  }
  const prevProject = () => {
    setcurrentIndex((prevIndex)=> {
      if (prevIndex === 0) {
        return projectsData.length - 1;
      } else {
        return prevIndex - 1;
      }
    }
    )
  }

  useEffect(() => {
  
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setcardsToShow(projectsData.length)
        }
         else{
        setcardsToShow(1)
        };
    }
        updateCardsToShow()

        window.addEventListener("resize", updateCardsToShow)
        return () => {
          window.removeEventListener("resize", updateCardsToShow)
        }
      
   }, [])
  
  
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    
    className="px-10" id="Projects">
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
        onClick={prevProject}
          className="p-3 bg-gray-200 rounded mr-2  "
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button 
        onClick={nextProject}
          className="p-3 bg-gray-200 rounded mr-2  "
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-8 transition-transform duration-500 ease-in-out "
        style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}} 
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4 ">
              <img src={project.image} className="w-full h-auto mb-16" />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                <p className="text-gray-50 text-sm">{project.price} <span>|</span> {project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
