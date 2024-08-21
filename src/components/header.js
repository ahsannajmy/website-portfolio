import profileImage from '../assets/img-profile.png'
import { headerContent } from '../contents/content';

export default function Header() {
  return (
    <div className="bg-main-color flex flex-col sm:flex-row items-center max-w-5xl mx-auto px-10 py-20 gap-4 sm:gap-20">
      <div className='flex-shrink-0'>
        <img src={profileImage} alt="img-profile" className='rounded-full w-[262px] h-[262px] object-cover'></img>
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='text-secondary-color text-lg text-left font-bold'>Hi, I'm Ahsan</h1>
        <HeaderContent text={headerContent}/>
        <div className='items-start'>
          <ButtonSecondary text={"Projects"}/>
        </div>
      </div>
    </div>
  );
}

function HeaderContent({ text }) {
  return (
    <p className='text-secondary-color text-sm font-semibold text-justify'>
      { text }
    </p>
  );
}

function ButtonSecondary({ text }) {
  return (
    <button className='bg-secondary-color p-3 rounded-lg drop-shadow-lg text-main-color font-bold'>
      { text }
    </button>
  );
}