import profileImage from '../assets/img-profile.png'
import { headerContent } from '../contents/content';

export default function Header() {
  return (
    <div className="bg-main-color flex justify-between items-center max-w-5xl mx-auto py-20 gap-6">
      <div className='flex items-center max-w-screen-lg'>
        <img src={profileImage} alt="img-profile" className='rounded-full object-cover'></img>
      </div>
      <div className='flex flex-col items-start space-y-6'>
        <h1 className='text-secondary-color text-lg font-bold'>Hi, I'm Ahsan</h1>
        <HeaderContent text={headerContent}/>
        <ButtonSecondary text={"Projects"}/>
      </div>
    </div>
  );
}

function HeaderContent({ text }) {
  return (
    <p className='text-secondary-color text-sm font-semibold text-justify'>
      { text }
    </p>
  )
}

function ButtonSecondary({ text }) {
  return (
    <button className='bg-secondary-color p-3 rounded-md text-main-color font-bold'>
      { text }
    </button>
  )
}