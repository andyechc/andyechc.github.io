import { useContext, Suspense, useRef } from "react";
import LanguageContext from "/src/context/LanguageContext";
import { useIntersectionObserver } from "/src/hooks/useIntersectionObserver";

import {TitleSection} from "../TitleSection";
import {ResumeCard} from './ResumeCard'

import tienda from "/src/assets/tienda-ecc.png";
import rm from "/src/assets/rm-wk.png";
import tfc from "/src/assets/tfc.png";

export function Resume() {
  const resumeVisorRef = useRef();
  const [isResumeCardIntersecting] = useIntersectionObserver(resumeVisorRef, false);

  const { text } = useContext(LanguageContext);
  const resumeText = {...text.resume}
  
  return (
    <section id="resume" className="bg-gradient-to-b from-zinc-950 from-30% to-black px-10 py-32 flex flex-col justify-center items-center gap-32">
      <TitleSection title={resumeText.title} quote={resumeText.quote}/>
      
      <article className="w-full max-w-[1000px] flex flex-col justify-center items-center gap-24">
        <ResumeCard title="Rick & Morty Wiki" description={resumeText.description.rm} img={rm} repo="RM-Wiki" web="rm-wk"/>
        <ResumeCard title="🛒Tienda" description={resumeText.description.tienda} img={tienda} repo="tienda" web="tienda-ecomers"/>
        <ResumeCard title="Twitter Follow Card" description={resumeText.description.tfc} img={tfc} repo="TwitterFollowCard-Replica" web="twitter-follow-card-replica"/>
      </article>
    </section>
  );
}
