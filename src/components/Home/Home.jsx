import LanguageContext from "/src/context/LanguageContext";
import { useContext } from "react";

import andev from "/src/assets/andev.jpg";

export function Home() {
  const { text } = useContext(LanguageContext);

  return (
    <main
      id="home"
      className="bg-center bg-cover bg-no-repeat bg-gradient-to-b from-blue-950 from-30% to-zinc-950 flex flex-wrap-reverse justify-center items-center gap-10 px-10 py-32 shadow-gray-900"
    >
      <section className="flex flex-col gap-6 animate-show">
        <h2 className="md:text-5xl text-4xl font-extrabold text-gray-100">
          J.Andy Echevarria Contreras
        </h2>

        <span className="text-md font-normal text-gray-100">
          {text.cover.text1}
        </span>

        <button className="w-[100px]">
          <a
            className="block h-full py-1 bg-primary text-sm text-white font-extrabold border border-primary hover:bg-opacity-25 hover:text-gray-100 rounded-md transition-all"
            href="#contact"
          >
            {text.cover.button}
          </a>
        </button>
      </section>

      <aside className="animate-appear">
        <img
          className="w-[200px] md:w-[300px] rounded-full shadow-xl"
          src={andev}
          alt="Jose Andy Echevarria Contreras - andev"
        />
      </aside>
    </main>
  );
}
