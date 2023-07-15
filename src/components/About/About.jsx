import React, { useContext, useRef } from "react";

const developer = React.lazy(()=> import( "/src/assets/coding.jpg"));

import { useIntersectionObserver } from "/src/hooks/useIntersectionObserver";
import LanguageContext from "/src/context/LanguageContext";

import { Bio } from "./Bio";
import { TitleSection } from "../TitleSection";


export function About() {
  const imgVisorRef = useRef();
  const { text } = useContext(LanguageContext);
  const aboutText = { ...text.about };

  const [isImgIntersecting] = useIntersectionObserver(imgVisorRef);

  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b from-zinc-950 from-30% to-gray-900 flex flex-col items-center gap-28 py-32 px-10"
    >
      
      <TitleSection title={aboutText.title} quote={aboutText.quote} />
      

      <article className="w-full max-w-[1000px] flex justify-center items-center flex-wrap lg:flex-nowrap gap-10 transition-all">
        <aside
          ref={imgVisorRef}
          className="min-w-[300px] max-w-[400px] min-h-[300px] p-5 flex justify-center items-center"
        >
          {isImgIntersecting && (
            <img
              className="rounded-lg aspect-square lg:aspect-[3/4] object-cover shadow-[20px_20px_0] shadow-primary animate-appear"
              src={developer}
              alt={aboutText.quote}
            />
          )}
        </aside>

        <Bio />
      </article>
    </section>
  );
}
