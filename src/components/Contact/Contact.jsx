import { useContext } from "react";
import {TitleSection} from '../TitleSection'
import {Form} from './Form'
import LanguageContext from "/src/context/LanguageContext";

export function Contact(){
  const { text, handleLanguage } = useContext(LanguageContext);
  const textContact = {...text.contact};
  
  return (
    <section id='contact' className="w-full h-full py-32 px-10 bg-gradient-to-b from-black to-gray-950 flex flex-col justify-center items-center gap-24">
      <TitleSection title={textContact.title} quote={textContact.quote}/>
      
      <Form/>
      
      <span className='text-md font-normal text-gray-500 flex justify-center items-center gap-2'>
        Powered by 
        <a href="https://formspree.io">
          <img 
            className="w-[160px]" 
            alt="Formspree"
            src="https://cdn.icon-icons.com/icons2/2699/PNG/512/formspree_logo_icon_170134.png"
          />
        </a>
      </span>
    </section>
  )
}