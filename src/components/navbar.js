import downloadIcon from '../assets/download-icon.svg'; 
import cvFile from '../assets/cv-file.pdf';
import { navItemsLeft } from '../contents/content';


export default function Navbar({ homeRef, eduskillRef, projectRef, sertificateRef, contactRef }) {
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-main-color rounded-b-2xl drop-shadow-lg flex flex-col sm:flex-row justify-center sm:justify-between items-center py-6 px-20 gap-4">
      <div className="flex flex-row items-center">
        <a href={cvFile}>
          <img src={downloadIcon} alt="Download icon" className='h-8 w-8 mt-2'></img>
        </a>
        <p className="text-secondary-color text-sm font-bold">{navItemsLeft[0]}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 items-center">
        {/* {navItemsRight.map((navItem) => (
          <NavItem key={navItem} text={navItem}/>
        ))} */}
        <button 
          className="text-secondary-color text-sm font-bold hover:text-hover-secondary"
          onClick={() => handleScroll(homeRef)}>
          HOME
        </button>
        <button 
          className="text-secondary-color text-sm font-bold hover:text-hover-secondary"
          onClick={() => handleScroll(eduskillRef)}>
          ABOUT ME
        </button>
        <button 
          className="text-secondary-color text-sm font-bold hover:text-hover-secondary"
          onClick={() => handleScroll(projectRef)}>
          PROJECT
        </button>
        <button 
          className="text-secondary-color text-sm font-bold hover:text-hover-secondary"
          onClick={() => handleScroll(sertificateRef)}>
          SERTIFICATE
        </button>
        <button 
          className="text-secondary-color text-sm font-bold hover:text-hover-secondary"
          onClick={() => handleScroll(contactRef)}>
          CONTACT
        </button>
      </div>
    </div>
  );
}