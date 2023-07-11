import {useContext} from 'react'

import { Logo } from "../Logo";
import { SocialMedias } from "../SocialMedias";

import LanguageContext from "/src/context/LanguageContext";

export function Footer(){
  const { text } = useContext(LanguageContext);
  
  return(
    <footer className='w-full flex flex-wrap md:justify-evenly items-center py-10 px-10 bg-gradient-to-b from-gray-950 to-blue-950 gap-20'>
      <article className='max-w-[300px] flex flex-col justify-center gap-5'>
        <Logo />
        <p className="text-md font-normal text-gray-300">{`J.Andy Echevarria Contreras. Frontend Developer. ${text.about.quote}. ${text.about.bio.text9}..`}</p>
        <SocialMedias/>
      </article>
      
      <article className='max-w-[150px] flex flex-col justify-center gap-5'>
        <span className='text-white text-lg font-bold'>{text.footer.nav}</span>
        <nav className="text-md text-gray-300 font-normal flex flex-col gap-2">
          <a className='hover:text-primary' href='#home'>{text.header.link1}</a>
          <a className='hover:text-primary' href='#about'>{text.header.link2}</a>
          <a className='hover:text-primary' href='#skills'>{text.header.link3}</a>
          <a className='hover:text-primary' href='#resume'>{text.header.link4}</a>
          <a className='hover:text-primary' href='#contact'>{text.header.link5}</a>
        </nav>
      </article>
      
      <article className='max-w-[150px] flex flex-col justify-center gap-2'>
       <span className='text-white text-lg font-bold'>Adress
          <p className="text-md font-normal text-gray-300">Havana, Cuba</p>
        </span>
       <span className='text-white text-lg font-bold'>Email
        <p className="text-md font-normal text-gray-300">andevcode@gmail.com</p>
       </span>
       <span className='text-white text-lg font-bold'>Phone
        <p className="text-md font-normal text-gray-300">+5356804881</p>
       </span>
      </article>
      
      <div className='w-full max-w-[1000px] flex-grow flex flex-wrap justify-between gap-5'>
        <span className="text-md text-gray-300 flex-grow">
          {text.footer.copy}
            <strong className="text-white"> andev </strong>
          © 2023
        </span>
        <a className='text-gray-300 hover:primary'>{text.footer.tc}</a>
        <a className='text-gray-300 hover:primary'>{text.footer.pp}</a>
      </div>
    </footer>
  )
}