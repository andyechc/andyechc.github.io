import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";

import andev from "../assets/andev.jpg";

export function Cover() {
  const { text } = useContext(LanguageContext);
  
  return (
    <main className="flex flex-wrap-reverse justify-center items-center gap-10 bg-gradient-to-b from-gray-900 from-30% to-zinc-900 px-10 md:px-0 py-20">
      <section className="flex flex-col gap-3 animate-show">
        <h2 className="text-4xl font-extrabold text-gray-100">
          J.Andy Echevarria Contreras
        </h2>

        <span className="text-md font-normal text-gray-300">
          {text.cover.text1}
        </span>

        <button className="w-[150px]">
          <a
            className="block h-full py-1 text-sm text-blue-600 font-extrabold border border-blue-600 hover:bg-blue-600 hover:text-gray-100 rounded-md transition-all"
            href="#"
          >
            {text.cover.button}
          </a>
        </button>
      </section>

      <aside className="animate-show">
        <img
          className="w-[200px] md:w-[300px] rounded-full shadow-md"
          src={andev}
          alt="Jose Andy Echevarria Contreras - andev"
        />
      </aside>
    </main>
  );
}
