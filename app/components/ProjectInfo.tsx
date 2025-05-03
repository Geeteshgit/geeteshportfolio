import { Projects } from "@/data/myData";
import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { VscGithubAlt } from "react-icons/vsc";
import { motion } from "motion/react";

const ProjectInfo: React.FC<Projects> = (props) => {
  return (
    <div className="lg:w-2/5 w-full flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <h2 className="relative lg:text-3xl text-2xl bg-gradient-to-r bg-clip-text text-transparent from-purple-400 to-purple-200 font-semibold lg:before:content-[''] lg:before:h-1 lg:before:w-[25px] lg:before:rounded-full lg:before:bg-gradient-to-r before:from-purple-600 before:to-purple-200 lg:before:absolute lg:before:top-1/2 lg:before:-left-[35px]">
          {props.name}
        </h2>
        <a
          href={props.github}
          target="_blank"
          className="no-expand hover:scale-110 transition-all duration-300 p-1"
        >
          <VscGithubAlt className="lg:text-2xl text-xl" />
        </a>
      </div>
      <p className="text-neutral-400">{props.description}</p>
      <ul className="flex flex-col gap-1.5">
        {props.features?.map((feat, idx) => {
          return (
            <li key={idx} className="flex items-center gap-1 text-sm">
              <MdNavigateNext className="text-xl text-purple-400" />
              {feat}
            </li>
          );
        })}
      </ul>
      <div className="flex flex-wrap gap-3">
        {props.technologies?.map((tech, idx) => {
          return (
            <motion.div 
                key={idx}
                className="flex items-center gap-1 text-sm bg-neutral-900 px-3 py-1 border border-neutral-700 rounded-lg shadow-lg shadow-purple-500/10">
              <motion.img
                src={`/icons/${tech}.svg`}
                alt="technology-icon"
                className="h-4"
              />
              <h3 className="opacity-90">{tech}</h3>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectInfo;
