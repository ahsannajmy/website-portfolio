import { forwardRef } from "react";
import { skillList } from "../contents/content";

export const Skill = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="py-20 px-10 sm:px-32">
        <div className="flex flex-col items-center gap-10">
          <span className="text-center text-2xl sm:text-4xl font-bold">
            Here are my tech stacks i have learned so far
          </span>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {skillList.map((skill, index) => (
              <div>
                <img
                  src={skill.imgName}
                  alt="skill-name"
                  className="animate-slideUp w-16 h-16 sm:w-32 sm:h-32"
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});
