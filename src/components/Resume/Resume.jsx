import { useContext } from "react";
import LanguageContext from "/src/context/LanguageContext";

import TitleSection from "../TitleSection";
import {ResumeCard} from "./ResumeCard";

import tienda from "/src/assets/tienda-ecc.png";

export function Resume() {
  const { text } = useContext(LanguageContext);
  
  return (
    <section id="resume" className="bg-gradient-to-b from-zinc-950 from-30% to-black px-10 py-32 flex flex-col justify-center items-center gap-20">
      <TitleSection title="Resume" quote="Some of my Recent Project" />
      
      <article className="w-full max-w-[1000px] flex flex-col justify-center items-center gap-14">
        <ResumeCard description="Templete de una Eccomerce, con Filtros y Shop Cart" img={tienda} alt="bla bla" repo="tienda" web="tienda-ecomers"/>
        <ResumeCard/>
      </article>
    </section>
  );
}
