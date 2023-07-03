import LanguageContext from "../context/LanguageContext";
import { useContext, useState } from "react";

import { InfoTable } from "./InfoTable";

export function Bio() {
  const { text } = useContext(LanguageContext);
  const [more, setMore] = useState(false);

  const handleMore = () => {
    setMore(!more);
  };

  return (
    <article className="relative w-full text-left flex flex-col items-center gap-10">
      <h4 className="text-xl md:text-2xl text-white font-bold">
        {text.about.bio.title}
      </h4>

      <p className="flex flex-col gap-5 justify-center after:content-[''] after:absolute after:top-0 after:left-0 after:bg-gradient-to-b from-zinc-950 to-black after:w-full after:h-0 after:animate-reveal">
        <p className="text-gray-300 text-md md:text-lg font-light">
          {text.about.bio.text1}
          <b>{text.about.bio.text2} </b> {text.about.bio.text3}
          <b> {text.about.bio.text4}</b>
        </p>
        

        <p className="text-gray-300 text-md md:text-lg font-light">
          {text.about.bio.text5}
          <b>{text.about.bio.text6}</b>
          {text.about.bio.text7}
          <b className="text-yellow-500"> Javascript </b>
          {text.about.bio.text8}
          <b className="text-sky-500"> React.</b>
        </p>

        <details className="text-md text-primary">
          <summary
            onClick={handleMore}
            className="mb-5 cursor-pointer animate-bounce"
          >
            {more ? `${text.about.details.less}` : `${text.about.details.more}`}
          </summary>

          <p className="flex flex-col gap-5">
            <b className="text-md text-white font-bold">
              {text.about.bio.text9}
            </b>

            <p className="text-gray-300 text-md md:text-lg font-light">
              {text.about.bio.text10}
              <b>{text.about.bio.text11}</b> {text.about.bio.text12}
            </p>

            <b className="text-md text-white font-bold">
              {text.about.bio.text13}
            </b>
          </p>
        </details>
      </p>

      <InfoTable />
    </article>
  );
}
