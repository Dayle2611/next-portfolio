import React from "react";
import ProjectItemm from "./ProjectItem";
import mobileApp from "../public/assets/projects/mobileApp.jpg";
import software from "../public/assets/projects/software.jpg";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto -px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItemm
            image={mobileApp}
            title="Mobile App"
            link="/"
            tech="React-native"
          />
          <ProjectItemm
            image={software}
            title="Random Web App"
            link="/"
            tech="React"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
