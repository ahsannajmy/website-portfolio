import { forwardRef } from "react";
import { sertificates } from "../contents/content";
import ModalImage from "react-modal-image";

export const Sertificate = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="py-20 px-10 sm:px-32">
        <div className="flex flex-col gap-4 items-center">
          <div>
            <span className="text-center text-2xl sm:text-4xl font-bold">
              Certification
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow">
            {sertificates.map((certificate, index) => (
              <div key={index}>
                <ModalImage
                  className="h-[120px] w-[260px] md:h-[240px] md:w-[375px] lg:h-[300px] lg:w-[573px]"
                  small={certificate.img}
                  large={certificate.img}
                  alt={certificate.name}
                  hideDownload
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});
