import Slider from "react-slick";
import { sertificates } from "../contents/content";

export default function Sertificate() {
  return (
    <div className="py-20 px-10 sm:px-0 justify-items-center max-w-5xl mx-auto flex flex-col gap-4">
      <h1 className="text-lg-2 font-bold text-main-color text-center">Sertificates</h1>
      <Slider
        dots={true}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        adaptiveHeight={true}
      >
        {sertificates.map((sertificate) => (
          <div className="bg-card-color p-10 rounded-lg">
            <div className="flex flex-col gap-6">
              {sertificate.map((part) => (
                <img src={part} alt="sertificate-img"></img>
              ))}
            </div>
          </div> 
        ))}
      </Slider>
    </div>
  );
}