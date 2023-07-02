import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";

import andev from "../assets/andev.jpg";

export function Cover() {
  const { text } = useContext(LanguageContext);

  return (
    <main
      className={`bg-[url('bg-image.jpg')] bg-center bg-cover bg-no-repeat bg-gradient-to-b from-gray-900 from-30% to-zinc-950 flex flex-wrap-reverse justify-center items-center gap-10 px-10 md:px-0 py-20 shadow-[inset_0_60px_55px_-10px] shadow-gray-900 `}
    >
      <section className="flex flex-col gap-6 animate-show">
        <h2 className="text-4xl font-extrabold text-gray-100">
          J.Andy Echevarria Contreras
        </h2>

        <span className="text-md font-normal text-gray-100">
          {text.cover.text1}
        </span>

        <button className="w-[100px]">
          <a
            className="block h-full py-1 bg-black bg-opacity-20 text-sm text-white font-extrabold border border-primary hover:bg-primary hover:text-gray-100 rounded-md transition-all"
            href="#"
          >
            {text.cover.button}
          </a>
        </button>
      </section>

      <aside className="animate-show">
        <img
          className="w-[200px] md:w-[300px] rounded-full shadow-xl"
          src={andev}
          alt="Jose Andy Echevarria Contreras - andev"
        />
      </aside>
    </main>
  );
}
