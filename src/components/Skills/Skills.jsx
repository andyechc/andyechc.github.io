import React, { useContext, useRef, Suspense } from "react";

import { useIntersectionObserver } from "/src/hooks/useIntersectionObserver";
import LanguageContext from "/src/context/LanguageContext";

import { SkillsCard } from "./SkillsCard";

import Html5 from "/src/icons/html5";
import Css3 from "/src/icons/css3";
import Js from "/src/icons/js";
import ReactJS from "/src/icons/react";
import Tailwind from "/src/icons/tailwind";

const TitleSection = React.lazy(() => import("../TitleSection"));

export function Skills() {
  const { text } = useContext(LanguageContext);
  const titleVisorRef = useRef();
  const [isTitleIntersecting] = useIntersectionObserver(titleVisorRef, false);

  return (
    <section
      id="skills"
      className="w-full min-h-[500px] flex flex-col justify-center items-center gap-32 px-10 lg:px-20 py-28 bg-gradient-to-b from-gray-900 via-blue-950 to-zinc-950"
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

        <SkillsCard icon={<Html5 />} title="HTML 5" text={text.skills.html5} />

        <SkillsCard icon={<Css3 />} title="CSS 3" text={text.skills.css3} />

        <SkillsCard icon={<Js />} title="JavaScript" text={text.skills.js} />

        <SkillsCard
          icon={<ReactJS />}
          title="React JS"
          text={text.skills.react}
        />

        <SkillsCard
          icon={<Tailwind />}
          title="Tailwind"
          text={text.skills.tailwind}
        />
      </article>
    </section>
  );
}
