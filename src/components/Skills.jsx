import React, { useContext, useState, useRef, Suspense } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Html5 from "../icons/html5";

const TitleSection = React.lazy(() => import("./TitleSection"));

export function Skills() {
  const titleVisorRef = useRef();
  const [isTitleIntersecting] = useIntersectionObserver(titleVisorRef, false);

  return (
    <section
      id="skills"
      className="w-full min-h-[500px] flex flex-col justify-center items-center gap-32 px-10 py-28 bg-gradient-to-b from-gray-900 from-40% via-blue-950 to-zinc-950"
    >
      <Suspense>
        <div ref={titleVisorRef} className="w-full min-h-[100px]">
          {isTitleIntersecting && (
            <TitleSection title="Skills" quote="Mejorando Continuamente" />
          )}
        </div>
      </Suspense>

      <article className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="w-full max-h-[300px] flex flex-col items-center justify-center gap-5 text-center p-6 bg-indigo-800 bg-opacity-40 rounded-md backdrop-blur-md">
          <Html5 />
          <span className="text-xl text-white font-bold">HTML 5</span>
          <p className="text-md font-medium text-gray-300">
            Lenguaje de Marcado HTML5 utilizado para crear contenido y la
            estructura de una pagina web.
          </p>
        </div>
      </article>
    </section>
  );
}
