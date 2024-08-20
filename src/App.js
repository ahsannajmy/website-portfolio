import Navbar from './components/navbar.js';
import Header from './components/header.js'  
import EducationSkills from './components/education-skills.js';
import Project from './components/projects.js';
import { WavePrimary, WaveSecondary } from './contents/wave.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
        <Project/>
        <WaveSecondary/>
      </div>
    </div>
  )
}

export default App;
