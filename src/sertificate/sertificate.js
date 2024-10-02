import { forwardRef } from "react";
import { sertificates } from "../contents/content";

export const Sertificate = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="py-20 px-10 sm:px-32">
        <div className="flex flex-col gap-4 items-center">
          <div>
            <span className="text-center text-2xl sm:text-4xl font-bold">
              Sertificates
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow">
            {sertificates.map((sertificate, index) => (
              <div key={index}>
                <img
                  src={sertificate}
                  className="h-[120px] w-[260px] md:h-[240px] md:w-[375px] lg:h-[300px] lg:w-[573px]"
                  alt="sertificate"
                ></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});
