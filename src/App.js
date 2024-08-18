import Navbar from './components/navbar.js';
import Header from './components/header.js'  
import EducationSkills from './components/education-skills.js';
import WaveSecondary from './contents/wave.js';

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
      </div>
    </div>
  )
}

export default App;
