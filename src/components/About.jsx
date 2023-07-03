import developer from "../assets/coding.jpg";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import LanguageContext from "../context/LanguageContext";
import React, { useContext, useState, Suspense } from "react";

import { Bio } from "./Bio";
const TitleSection = React.lazy(() => import("./TitleSection"));

export function About() {
  const { text } = useContext(LanguageContext);

  return (
    <section
      id="about"
      className="w-full h-full bg-gradient-to-b from-zinc-950 from-30% to-gray-900 flex flex-col gap-32 py-32 px-10 xl:px-24"
    >
      <Suspense>
        <TitleSection title={text.about.title} quote={text.about.quote} />
      </Suspense>

      <article className="w-full flex justify-center items-center flex-wrap lg:flex-nowrap gap-10 transition-all">
        <aside className="min-w-[300px] md:max-w-[400px] p-5 flex justify-center items-center animate-appear">
          <img
            className="rounded-lg aspect-square lg:aspect-[3/4] object-cover shadow-[20px_20px_0] shadow-primary"
            src={developer}
          />
        </aside>

        <Bio />
      </article>
    </section>
  );
}
