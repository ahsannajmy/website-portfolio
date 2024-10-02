import { Education } from "./education/education";
import { Header } from "./header/header";
import { Navbar } from "./navbar/navbar";
import { useRef } from "react";
import { Skill } from "./skills/skill";
import { Project } from "./project/project";
import { Sertificate } from "./sertificate/sertificate";
import { Footer } from "./footer/footer";

function App() {
  const headerRef = useRef(null);
  const educationRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const sertificateRef = useRef(null);
  return (
    <>
      <Navbar
        homeRef={headerRef}
        eduRef={educationRef}
        skillRef={skillRef}
        projectRef={projectRef}
        sertificateRef={sertificateRef}
      />
      <Header ref={headerRef} />
      <Education ref={educationRef} />
      <Skill ref={skillRef} />
      <Project ref={projectRef} />
      <Sertificate ref={sertificateRef} />
      <Footer />
    </>
  );
}

export default App;
