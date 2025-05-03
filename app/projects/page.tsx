"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { featuredProjects } from "@/data/myData";
import ProjectCard from "../components/ProjectCard";
import ProjectInfo from "../components/ProjectInfo";
import Footer from "../components/Footer";

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateContent = useTransform(scrollYProgress, [0, 1], [45, -45]);
  const opacityContent = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );

  return (
    <>
      <section
        id="projects"
        className="black-background min-h-screen flex flex-col items-center lg:gap-24 gap-12 pt-[100px] lg:pb-30 sm:pb-24 pb-16 lg:px-44 sm:px-28 px-4"
      >
        <motion.h1
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
          className="sm:text-5xl text-4xl text-center font-bold bg-gradient-to-r bg-clip-text text-transparent from-purple-600 to-purple-200"
        >
          PROJECTS
        </motion.h1>
        <div className="flex flex-col sm:gap-36 gap-18" ref={ref}>
          {featuredProjects.map((project) => {
            return (
              <motion.div
                key={project.name}
                className="flex flex-col lg:flex-row lg:gap-15 gap-10"
              >
                <ProjectCard
                  image={project.image}
                  caption={project.caption}
                  link={project.link}
                  name={project.name}
                  translateContent={translateContent}
                  opacityContent={opacityContent}
                />
                <ProjectInfo
                  name={project.name}
                  github={project.github}
                  description={project.description}
                  features={project.features}
                  technologies={project.technologies}
                  opacityContent={opacityContent}
                />
              </motion.div>
            );
          })}
        </div>
      </section>
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full" />
      <Footer />
    </>
  );
};

export default Projects;
