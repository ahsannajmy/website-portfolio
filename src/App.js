import Navbar from './components/navbar.js';
import Header from './components/header.js'  
import EducationSkills from './components/education-skills.js';
import Project from './components/projects.js';
import { WavePrimary, WaveSecondary } from './contents/wave.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sertificate from './components/sertificate.js';
import './index.css';
import { useRef } from 'react';
import Footer from './components/footer.js';

function App() {
  const homeRef = useRef(null);
  const eduskillRef = useRef(null);
  const projectRef = useRef(null);
  const sertificateRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <div className='bg-main-color' ref={homeRef}>
        <Navbar 
          homeRef={homeRef}
          eduskillRef={eduskillRef}
          projectRef={projectRef}
          sertificateRef={sertificateRef}
          contactRef={contactRef}
        />
        <Header/>
      </div>
      <div className='bg-secondary-color' ref={eduskillRef}>
        <WaveSecondary/>
        <EducationSkills/>
        <WavePrimary/>
      </div>
      <div className='bg-main-color mt-[-1px]' ref={projectRef}>
        <Project/>
      </div>
      <div className='bg-secondary-color mt-[-3px]' ref={sertificateRef}>
        <WaveSecondary/>
        <Sertificate/>
        <WavePrimary/>
      </div>
      <div className='bg-main-color mt-[-1px]' ref={contactRef}>
        <Footer/>
      </div>
    </div>
  )
}

export default App;
