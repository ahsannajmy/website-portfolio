import Slider from "react-slick";
import { projectProperties } from "../contents/content";

export default function Project() {
  return (
    <div className="justify-items-center flex flex-col max-w-5xl mx-auto py-20 px-10 sm:px-0 gap-4">
      <h1 className="text-lg-2 text-secondary-color font-bold text-center">Projects</h1>
      <Slider
        dots={true}
        infinite={true}
        speed={1000}
        slidesToShow={1}
        slidesToScroll={1}
        adaptiveHeight={true}
      >
        {projectProperties.map((project) => (
          <div className="p-4 justify-items-center bg-card-main-color rounded-lg">
            <h1 className="text-lg-3 text-secondary-color font-bold text-center">{project.projectName}</h1>
            <ProjectDesc descList={project.projectDesc} projectLink={project.projectLink}/>
            <ProjectSkills skillList={project.skillList} imgName={project.imgMainSkill}/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

function ProjectDesc({ descList, projectLink }) {
  return (
    <div className="p-10">
      <ul className="list-disc list-outside">
        {descList.map((desc) => (
          <li className="text-secondary-color font-semibold text-md text-left sm:text-justify mt-4">{desc}</li>
        ))}
        <li className="text-secondary-color font-semibold text-md text-justify mt-4 list-none">
          For more detail of my project here are the <a href={projectLink} className="hover:text-blue-400">link</a>
        </li>
      </ul>
    </div>
  );
}

function ProjectSkills({ skillList, imgName }) {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex flex-wrap gap-2 max-w-2xl justify-center mx-auto">
        {skillList.map((skill) => (
          <span className="p-4 bg-card-main-color rounded-md drop-shadow-lg">
            <p className="text-secondary-color font-semibold text-md text-center">
              {skill}
            </p>
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 justify-center mx-auto max-w-sm">
        {imgName.map((image) => (
          <img src={image} className="w-[70px] h-[70px] object-contain" alt="img-project-main-skill"></img>
        ))}
      </div>
    </div>
  )
}