import developer from "../assets/coding.jpg";

import {Bio} from "./Bio"

export function About() {
  return (
    <section
      id="about"
      className="w-full h-full bg-gradient-to-b from-zinc-950 from-30% to-black flex flex-col gap-10 py-20 px-10 xl:px-24"
    >
      <div className="flex flex-col justify-center items-center gap-2 animate-show">
        <span className="text-primary text-md font-medium">About Me</span>
        <h3 className="text-white text-3xl font-extrabold text-center inline">
          A Apassionate Developer Who Loves To Code
        </h3>
      </div>

      <article className="w-full flex justify-center items-center flex-wrap md:flex-nowrap gap-10 animate-show">
        <aside className="w-full p-5 flex justify-center items-center">
          <img
            className="rounded-lg shadow-[20px_20px_0] shadow-primary"
            src={developer}
          />
        </aside>

        <Bio/>
      </article>
    </section>
  );
}
