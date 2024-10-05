import { SkillCard } from "./skillCard";
import { TechStack } from "./techStack";

export const ProjectCard = (props) => {
  return (
    <>
      <div className="text-main-color px-10 py-16 rounded-lg shadow-lg w-full relative flex justify-center items-center">
        <div className="flex flex-col gap-4 items-center">
          <span className="font-semibold text-2xl text-center">
            {props.project_name}
          </span>
          <img
            src={props.project_image}
            alt="project-image"
            className="h-[140px] w-[260px] sm:h-[340px] sm:w-[573px]"
          />
          <div className="flex flex-wrap flex-row justify-center gap-4">
            {props.skill_list.map((skill) => (
              <>
                <SkillCard label={skill} />
              </>
            ))}
          </div>
          <div className="flex flex-row justify-center gap-4">
            {props.img_skill.map((img) => (
              <>
                <TechStack tech_stack={img} />
              </>
            ))}
          </div>
        </div>
        <div
          className="absolute bottom-2 right-2 bg-transparent
         hover:bg-main-color duration-500 p-2 rounded-lg hover:text-white"
        >
          <a href={props.project_link} className="flex items-center">
            <span className="text-[8px] sm:text-xs">More details...</span>
          </a>
        </div>
      </div>
    </>
  );
};
