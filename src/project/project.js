import { forwardRef } from "react";
import { ProjectCard } from "./components/projectCard";
import { projectProperties } from "../contents/content";

export const Project = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="py-20 px-10 sm:px-32">
        <div className="flex flex-col gap-4 items-center">
          <span className="text-center text-2xl sm:text-4xl font-bold">
            Here are the project that was build around my tech stacks
          </span>
          <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-4">
            {projectProperties.map((project) => (
              <>
                <ProjectCard
                  project_image={project.projectImage}
                  project_name={project.projectName}
                  project_desc={project.projectDesc}
                  skill_list={project.skillList}
                  img_skill={project.imgMainSkill}
                  project_link={project.projectLink}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});
