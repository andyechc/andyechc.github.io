import React, { useContext, useRef, Suspense } from "react";

import { useIntersectionObserver } from "/src/hooks/useIntersectionObserver";
import LanguageContext from "/src/context/LanguageContext";

import { SkillsCard } from "./SkillsCard";

import Html5 from "/src/icons/html5";
import Css3 from "/src/icons/css3";
import Js from "/src/icons/js";
import ReactJS from "/src/icons/react";
import Tailwind from "/src/icons/tailwind";
import Git from "/src/icons/git";
import Vercel from "/src/icons/vercel";
import Vite from "/src/icons/vite";
import VsCode from "/src/icons/vscode";

const TitleSection = React.lazy(() => import("../TitleSection"));

export function Skills() {
  const { text } = useContext(LanguageContext);
  const skillsText = { ...text.skills };

  const titleVisorRef = useRef();
  const [isTitleIntersecting] = useIntersectionObserver(titleVisorRef, false);

  return (
    <section
      id="skills"
      className="w-full min-h-[500px] flex flex-col justify-center items-center gap-32 px-10 py-28 bg-gradient-to-b from-gray-900 via-blue-950 to-zinc-950"
    >
      <TitleSection title={skillsText.title} quote={skillsText.quote} />

      <article className="relative w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 place-items-center">
        <div className="w-32 h-32 bg-indigo-600 shadow-indigo-500 shadow-[0_0_20px] rounded-full absolute top-10 left-0 animate-moving"></div>
        <SkillsCard icon={<Html5 />} title="HTML 5" text={skillsText.html5} />
        <SkillsCard icon={<Css3 />} title="CSS 3" text={skillsText.css3} />
        <SkillsCard icon={<Js />} title="JavaScript" text={skillsText.js} />
        <SkillsCard icon={<ReactJS />} title="React JS" text={skillsText.react}/>
        <SkillsCard icon={<Tailwind />} title="Tailwind" text={skillsText.tailwind} />
      </article>

      <article className="relative w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 place-items-center">
        <div className="w-32 h-32 bg-blue-600 shadow-blue-500 shadow-[0_0_20px] rounded-full absolute top-10 left-0 animate-moving"></div>
        <SkillsCard icon={<Git />} title="Git" text={skillsText.git} />
        <SkillsCard icon={<Vercel />} title="Vercel" text={skillsText.vercel} />
        <SkillsCard icon={<Vite/>} title="Vite" text={skillsText.vite} />
        <SkillsCard icon={<VsCode/>} title="VS Code" text={skillsText.vscode} />
      </article>
    </section>
  );
}
