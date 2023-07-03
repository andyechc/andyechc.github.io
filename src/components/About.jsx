import React, { useContext, useState, useRef, Suspense } from "react";

import developer from "../assets/coding.jpg";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import LanguageContext from "../context/LanguageContext";

import { Bio } from "./Bio";
const TitleSection = React.lazy(() => import("./TitleSection"));

export function About() {
  const titleVisorRef = useRef();
  const imgVisorRef = useRef();
  const bioVisorRef = useRef();
  const { text } = useContext(LanguageContext);

  const [isTitleIntersecting] = useIntersectionObserver(titleVisorRef, false);
  const [isImgIntersecting] = useIntersectionObserver(imgVisorRef, false);
  const [isBioIntersecting] = useIntersectionObserver(bioVisorRef, false);

  return (
    <section
      id="about"
      className="w-full h-full bg-gradient-to-b from-zinc-950 from-30% to-gray-900 flex flex-col gap-32 py-32 px-10 xl:px-24"
    >
      <Suspense>
        <div ref={titleVisorRef}>
          {isTitleIntersecting && (
            <TitleSection title={text.about.title} quote={text.about.quote} />
          )}
        </div>
      </Suspense>

      <article className="w-full flex justify-center items-center flex-wrap lg:flex-nowrap gap-10 transition-all">
        <aside
          ref={imgVisorRef}
          className="min-w-[300px] max-w-[400px] min-h-[100px] p-5 flex justify-center items-center"
        >
          {isImgIntersecting && (
            <img
              className="rounded-lg aspect-square lg:aspect-[3/4] object-cover shadow-[20px_20px_0] shadow-primary animate-appear"
              src={developer}
            />
          )}
        </aside>


        <Suspense>
          <div ref={bioVisorRef}>{isBioIntersecting && <Bio />}</div>
        </Suspense>
      </article>
    </section>
  );
}
