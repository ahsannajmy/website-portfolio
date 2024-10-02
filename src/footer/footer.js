import {
  FaGithub,
  FaInbox,
  FaKaggle,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-main-color py-20 px-10 sm:px-32 text-white">
      <span className="mb-10 flex justify-center text-2xl sm:text-4xl font-bold">
        Contact Information
      </span>
      <div className="flex flex-col gap-10 sm:gap-0 sm:flex-row justify-start sm:justify-between">
        <div className="flex flex-col gap-4">
          <FooterItem name="ahsannajmy" icon={FaLinkedin} />
          <FooterItem name="ahsannajmy" icon={FaGithub} />
          <FooterItem name="ahsanramadhan" icon={FaKaggle} />
        </div>
        <div className="flex flex-col gap-4">
          <FooterItem
            name="ahsannajmy.ramadhan@gmail.com"
            icon={FaInbox}
            reverse={true}
          />
          <FooterItem name="087785174816" icon={FaWhatsapp} reverse={true} />
        </div>
      </div>
    </div>
  );
};

const FooterItem = ({ name, icon: Icon, reverse = false }) => {
  return (
    <div
      className={`flex ${
        reverse ? "flex-row sm:flex-row-reverse" : "sm:flex-row"
      } gap-2 items-center`}
    >
      <Icon />
      <span>{name}</span>
    </div>
  );
};
