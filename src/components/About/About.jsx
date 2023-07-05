import React, { useContext, useRef, Suspense } from "react";

import developer from "/src/assets/coding.jpg";

import { useIntersectionObserver } from "/src/hooks/useIntersectionObserver";
import LanguageContext from "/src/context/LanguageContext";

import { Bio } from "./Bio";
const TitleSection = React.lazy(() => import("../TitleSection"));

export function About() {
  const imgVisorRef = useRef();
  const { text } = useContext(LanguageContext);

  const [isImgIntersecting] = useIntersectionObserver(imgVisorRef);

  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b from-zinc-950 from-30% to-gray-900 flex flex-col gap-28 py-32 px-10 xl:px-24"
    >
      <Suspense>
        <TitleSection title={text.about.title} quote={text.about.quote} />
      </Suspense>

      <article className="w-full flex justify-center items-center flex-wrap lg:flex-nowrap gap-10 transition-all">
        <aside
          ref={imgVisorRef}
          className="min-w-[300px] max-w-[400px] min-h-[300px] p-5 flex justify-center items-center"
        >
          {isImgIntersecting && (
            <img
              className="rounded-lg aspect-square lg:aspect-[3/4] object-cover shadow-[20px_20px_0] shadow-primary animate-appear"
              src={developer}
              alt={text.about.quote}
            />
          )}
        </aside>

        <Bio />
      </article>
    </section>
  );
}
