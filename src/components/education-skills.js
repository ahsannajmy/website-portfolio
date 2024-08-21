import { educationList, skillList } from "../contents/content"

export default function EducationSkills() {
  return (
    <div className="bg-secondary-color flex flex-col sm:flex-row justify-evenly items-center sm:items-start max-w-5xl mx-auto py-20 px-10 sm:px-0 gap-20">
      <div class="flex flex-col space-y-2 gap-4">
        <h1 className="text-main-color text-lg-2 text-center sm:text-left font-bold">Education</h1>
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
      <div className="flex flex-col space-y-2 gap-4">
        <h1 className="text-main-color text-lg-2 text-center sm:text-left font-bold">Skills</h1>
        <div className="flex flex-wrap gap-y-4 justify-center sm:justify-normal">
          {skillList.map((skill) => (
            <div className="w-[calc(50%-1rem)] sm:w-[calc(25%-1rem)]">
              <CardSkills imgName={skill.imgName}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CardEducation({ range_tahun, nama_institusi, jurusan, deskripsi_lainnya }) {
  return (
    <div className="bg-card-color flex flex-col drop-shadow-lg w-[250px] sm:w-[310px] p-4 rounded-md gap-2">
      <h3 className="text-main-color text-sm-2 font-bold">{ range_tahun }</h3>
      <h2 className="text-main-color text-md font-bold">{ nama_institusi }</h2>
      <h3 className="text-main-color text-sm-2 font-bold">{ jurusan }</h3>
      <h3 className="text-main-color text-sm-2 font-semibold">{ deskripsi_lainnya }</h3>
    </div>
  );
}

function CardSkills({ imgName, skillList }) {
  return (
    <div className="flex items-center sm:items-start justify-center sm:justify-normal">
      <img src={imgName} alt="img-skills" className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px]" />
  </div>
  );
}
