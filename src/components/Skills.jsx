import React, { useContext, useState, useRef, Suspense } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { SkillsCard } from "../components/SkillsCard";
import Html5 from "../icons/html5";
import Css3 from "../icons/css3";
import Js from "../icons/js";
import ReactJS from "../icons/react";
import Tailwind from "../icons/tailwind";

const TitleSection = React.lazy(() => import("./TitleSection"));

export function Skills() {
  const titleVisorRef = useRef();
  const [isTitleIntersecting] = useIntersectionObserver(titleVisorRef, false);

  return (
    <section
      id="skills"
      className="w-full min-h-[500px] flex flex-col justify-center items-center gap-32 px-10 lg:px-20 py-28 bg-gradient-to-b from-gray-900 from-40% via-blue-950 to-zinc-950"
    >
      <Suspense>
        <div ref={titleVisorRef} className="w-full min-h-[100px]">
          {isTitleIntersecting && (
            <TitleSection title="Skills" quote="Mejorando Continuamente" />
          )}
        </div>
      </Suspense>

      <article className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 content-center place-items-center">
        <div className="w-32 h-32 bg-indigo-600 shadow-indigo-500 shadow-[0_0_20px] rounded-full absolute top-10 left-0 animate-moving"></div>

        <SkillsCard
          icon={<Html5 />}
          title="HTML 5"
          text="Lenguaje de Marcado HTML5 utilizado para crear contenido y la estructura
        de una pagina web."
        />

        <SkillsCard
          icon={<Css3 />}
          title="CSS 3"
          text="Lenguaje de Marcado HTML5 utilizado para crear contenido y la estructura
        de una pagina web."
        />

        <SkillsCard
          icon={<Js />}
          title="JavaScript"
          text="Lenguaje de Marcado HTML5 utilizado para crear contenido y la estructura
        de una pagina web."
        />

        <SkillsCard
          icon={<ReactJS />}
          title="React JS"
          text="Lenguaje de Marcado HTML5 utilizado para crear contenido y la estructura
        de una pagina web."
        />

        <SkillsCard
          icon={<Tailwind />}
          title="Tailwind"
          text="Lenguaje de Marcado HTML5 utilizado para crear contenido y la estructura
        de una pagina web."
        />
      </article>
    </section>
  );
}
