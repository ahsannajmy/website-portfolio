import downloadIcon from '../assets/download-icon.svg'; 
import cvFile from '../assets/cv-file.pdf';
import { navItemsLeft, navItemsRight } from '../contents/content';


export default function Navbar() {
  return (
    <div className="bg-main-color rounded-b-2xl drop-shadow-lg flex justify-between items-center py-6 px-20">
      <div className="flex space-x-1 items-center">
        <a href={cvFile}>
          <img src={downloadIcon} alt="Download icon" className='h-8 w-8 mt-2'></img>
        </a>
        <p className="text-secondary-color text-sm font-bold">{navItemsLeft[0]}</p>
      </div>
      <div className="flex space-x-8 items-center">
        {navItemsRight.map((navItem) => (
          <NavItem key={navItem} text={navItem}/>
        ))}
      </div>
    </div>
  );
}

function NavItem({ text }) {
   return (
    <button 
    className="text-secondary-color text-sm font-bold hover:text-hover-secondary"
    onClick={() => {

    }}>
      {text}
    </button>
   );
}