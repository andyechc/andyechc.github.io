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
    </section>
  )
}