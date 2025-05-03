"use client";

import React from "react";
import { motion, useScroll } from "motion/react";
import { projects } from "@/data/myData";
import ProjectCard from "./ProjectCard";
import ProjectInfo from "./ProjectInfo";

const Projects = () => {
  return (
    <section
      id="projects"
      className="black-background min-h-screen flex flex-col items-center gap-24 pt-[100px] pb-30 lg:px-44 sm:px-28 px-4"
    >
      <motion.h1
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="sm:text-5xl text-4xl text-center font-bold bg-gradient-to-r bg-clip-text text-transparent from-purple-600 to-purple-200"
      >
        MY PROJECTS
      </motion.h1>
      <div className="flex flex-col sm:gap-36 gap-24">
        {projects.map(project => {
          return (
            <motion.div 
              key={project.name}
              className="flex flex-col lg:flex-row lg:gap-15 gap-10">
              <ProjectCard 
                image={project.image} 
                caption={project.caption} 
                link={project.link} 
                name={project.name} 
              />
              <ProjectInfo
                name={project.name}
                github={project.github}
                description={project.description}  
                features={project.features}
                technologies={project.technologies}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
