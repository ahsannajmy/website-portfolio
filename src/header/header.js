import { forwardRef } from "react";
import profile from "../assets/img-profile.png";
import { Button } from "./components/button";

export const Header = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="py-20 px-10">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex-shrink-0">
            <img
              src={profile}
              alt="img-profile"
              className="rounded-full bg-orange-300 w-48 h-48 sm:w-72 sm:h-72 animate-slideUp"
            ></img>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <span
              className="text-main-color font-bold text-4xl sm:text-6xl animate-slideRight"
              style={{ animationDelay: "0.5s" }}
            >
              Hi, I'm Ahsan
            </span>
            <span
              className="text-main-color font-semibold text-2xl sm:text-4xl animate-slideLeft"
              style={{ animationDelay: "1s" }}
            >
              I'm a Backend Developer and Data Analyst Enthusiast
            </span>
            <div className="animate-slideUp" style={{ animationDelay: "1.5s" }}>
              <Button label="Projects" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
