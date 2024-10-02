import { forwardRef } from "react";
import { educationList } from "../contents/content";
import { EducationCard } from "./components/educationCard";

export const Education = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="py-20 px-10 sm:px-32">
        <div className="flex flex-col gap-10">
          <span className="text-center text-2xl sm:text-4xl font-bold">
            Little Brief About My Education ...
          </span>
          <div className="flex flex-col sm:flex-row gap-4">
            {educationList.map((education, index) => (
              <>
                <EducationCard
                  key={index}
                  yearRange={education.range_tahun}
                  institute={education.nama_institusi}
                  major={education.jurusan}
                  description={education.deskripsi_lainnya}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});
