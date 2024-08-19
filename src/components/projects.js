import Slider from "react-slick";

export default function Project() {
  return (
    <div className="bg-main-color">
      <div className="justify-items-center flex flex-col max-w-5xl mx-auto py-20">
        <h1 className="text-lg-2 text-secondary-color text-bold text-center">Projects</h1>
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}