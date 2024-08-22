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

function App() {
  return (
    <div>
      <div className='bg-main-color'>
        <Navbar/>
        <Header/>
      </div>
      <div className='bg-secondary-color'>
        <WaveSecondary/>
        <EducationSkills/>
        <WavePrimary/>
      </div>
      <div className='bg-main-color mt-[-1px]'>
        <Project/>
      </div>
      <div className='bg-secondary-color mt-[-3px]'>
        <WaveSecondary/>
        <Sertificate/>
      </div>
    </div>
  )
}

export default App;
