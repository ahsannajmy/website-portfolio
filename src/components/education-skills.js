import { educationList, skillList } from "../contents/content"

export default function EducationSkills() {
  return (
    <div className="bg-secondary-colo flex flex-row justify-evenly items-start max-w-5xl mx-auto py-20 gap-20">
      <div class="flex flex-col space-y-2">
        <h1 className="text-main-color text-lg-2 font-bold">Education</h1>
        <div className="flex flex-col gap-4">
          {educationList.map((education) => (
            <CardEducation
              range_tahun={education.range_tahun}
              nama_institusi={education.nama_institusi}
              jurusan={education.jurusan}
              deskripsi_lainnya={education.deskripsi_lainnya}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="text-main-color text-lg-2 font-bold">Skills</h1>
        <div className="flex flex-col space-y-6">
          {skillList.map((skill) => (
            <CardSkills imgName={skill.imgName} skillList={skill.skillList}/>
          ))}
        </div>
      </div>
    </div>
  )
}

function CardEducation({ range_tahun, nama_institusi, jurusan, deskripsi_lainnya }) {
  return (
    <div className="bg-card-color flex flex-col drop-shadow-lg w-[310px] p-4 rounded-md gap-2">
      <h3 className="text-main-color text-sm-2 font-bold">{ range_tahun }</h3>
      <h2 className="text-main-color text-md font-bold">{ nama_institusi }</h2>
      <h3 className="text-main-color text-sm-2 font-bold">{ jurusan }</h3>
      <h3 className="text-main-color text-sm-2 font-semibold">{ deskripsi_lainnya }</h3>
    </div>
  )
}

function CardSkills({ imgName, skillList }) {
  return (
    <div className="flex flex-row gap-2">
      <img src={imgName} alt="img-skills" className="w-[90px] h-[90px]"/>
      <div className="flex flex-wrap gap-2 items-start">
        {skillList.map((skill) => (
          <Skills skill={skill}/>
        ))}
      </div>
    </div>
  );
}

function Skills({ skill }) {
  return (
    <div className="bg-card-color p-2.5 drop-shadow-lg rounded-md">
      <p className="text-main-color text-sm font-bold">{ skill }</p>
    </div>
  );
}