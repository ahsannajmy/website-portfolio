import { FaGithub, FaKaggle, FaLinkedin } from "react-icons/fa";
import cvFile from "../assets/cv-file.pdf";
import {
  DownloadIcon,
  HamburgerCloseIcon,
  HamburgerOpenIcon,
} from "./components/navbarIcon";
import { NavbarItem } from "./components/navbarItem";
import { useState } from "react";

export const Navbar = ({
  homeRef,
  eduRef,
  skillRef,
  projectRef,
  sertificateRef,
}) => {
  const [leftNavbar, setLeftNavbar] = useState(false);

  const openLeftNavbar = () => {
    setLeftNavbar(true);
  };

  const closeLeftNavbar = () => {
    setLeftNavbar(false);
  };

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div
        className="sticky z-40 top-0 left-0 right-0 shadow-md 
      backdrop-filter backdrop-blur-lg flex flex-col"
      >
        <div className="px-4 sm:px-20 py-4">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center">
              <a href={cvFile}>
                <DownloadIcon />
              </a>
              <span className="text-sm font-semibold">CV</span>
            </div>
            <div className="hidden sm:flex flex-row gap-4 items-center">
              <NavbarItem label="Home" handler={() => handleScroll(homeRef)} />
              <NavbarItem
                label="Education"
                handler={() => handleScroll(eduRef)}
              />
              <NavbarItem
                label="Skill"
                handler={() => handleScroll(skillRef)}
              />
              <NavbarItem
                label="Project"
                handler={() => handleScroll(projectRef)}
              />
              <NavbarItem
                label="Sertificate"
                handler={() => handleScroll(sertificateRef)}
              />
            </div>
            <div className="hidden sm:flex flex-row gap-4 items-center">
              <a href="https://linkedin.com/in/ahsannajmy">
                <FaLinkedin className="text-main-color" />
              </a>
              <a href="https://www.kaggle.com/ahsanramadhan">
                <FaKaggle className="text-main-color" />
              </a>
              <a href="https://www.github.com/ahsannajmy">
                <FaGithub className="text-main-color" />
              </a>
            </div>
            <div className="sm:hidden flex items-center">
              {leftNavbar ? (
                <>
                  <button onClick={closeLeftNavbar}>
                    <HamburgerOpenIcon />
                  </button>
                </>
              ) : (
                <>
                  <button onClick={openLeftNavbar}>
                    <HamburgerCloseIcon />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        {leftNavbar && (
          <div className="relative h-auto z-50 w-full backdrop-blur-lg px-2 py-4">
            <div className="flex flex-col items-center gap-4">
              <NavbarItem label="Home" handler={() => handleScroll(homeRef)} />
              <NavbarItem
                label="Education"
                handler={() => handleScroll(eduRef)}
              />
              <NavbarItem
                label="Skill"
                handler={() => handleScroll(skillRef)}
              />
              <NavbarItem
                label="Project"
                handler={() => handleScroll(projectRef)}
              />
              <NavbarItem
                label="Sertificate"
                handler={() => handleScroll(sertificateRef)}
              />
              <div className="flex flex-row gap-4 items-center">
                <a href="https://linkedin.com/in/ahsannajmy">
                  <FaLinkedin className="text-main-color" />
                </a>
                <a href="https://www.kaggle.com/ahsanramadhan">
                  <FaKaggle className="text-main-color" />
                </a>
                <a href="https://www.github.com/ahsannajmy">
                  <FaGithub className="text-main-color" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
