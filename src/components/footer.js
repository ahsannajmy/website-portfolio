import { FaEnvelope, FaGithub, FaKaggle, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="justify-items-center py-20 sm:py-10">
      <h1 className="text-center text-secondary-color font-bold text-lg-3 sm:text-lg-2">For more detail and information</h1>
      <div className="px-10 sm:px-40 py-10 flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between">
      <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <FaLinkedin className="text-secondary-color"/>
            <a href="https://www.linkedin.com/in/ahsannajmy/">
              <span className="text-secondary-color text-md font-bold">ahsannajmy</span>
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <FaGithub className="text-secondary-color"/>
            <a href="https://github.com/ahsannajmy">
              <span className="text-secondary-color text-md font-bold">ahsannajmy</span>
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <FaKaggle className="text-secondary-color"/>
            <a href="https://www.kaggle.com/ahsanramadhan">
              <span className="text-secondary-color text-md font-bold">ahsanramadhan</span>
            </a> 
          </li>
        </ul>
        <ul className="text-left sm:text-right space-y-2">
          <li className="flex items-center space-x-2">
            <FaEnvelope className="text-secondary-color"/>
            <span className="text-secondary-color text-md font-bold">ahsannajmy.ramdhan@gmail.com</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaPhone className="text-secondary-color"/>
            <span className="text-secondary-color text-md font-bold">+6287785174816</span>
          </li>
        </ul>
    </div>
    </div>
  );
}

