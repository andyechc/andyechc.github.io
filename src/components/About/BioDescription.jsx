import { useContext, useState } from "react";
import LanguageContext from "/src/context/LanguageContext";

export function BioDescription() {
  const { text } = useContext(LanguageContext);
  const bioText = { ...text.about.bio };
  const detailsText = { ...text.about.details };

  const [more, setMore] = useState(false);

  const handleMore = () => {
    setMore(!more);
  };

  return (
    <>
      <h4 className="text-xl md:text-2xl text-white font-extrabold animate-show">
        {bioText.title}
      </h4>

      <p className="min-h-[400px] flex flex-col gap-5 justify-center">
        <p className="text-gray-300 text-md md:text-lg font-light">
          {bioText.text1}
          <b>{bioText.text2} </b>
          {bioText.text3}
          <b> {bioText.text4}</b>
        </p>

        <p className="text-gray-300 text-md md:text-lg font-light">
          {bioText.text5}
          <b>{bioText.text6}</b>
          {bioText.text7}
          <b className="text-yellow-500"> Javascript </b>
          {bioText.text8}
          <b className="text-sky-500"> React.</b>
        </p>

        <details className="text-md text-primary">
          <summary
            onClick={handleMore}
            className="mb-5 cursor-pointer animate-bounce"
          >
            {more ? detailsText.less : detailsText.more}
          </summary>

          <p className="flex flex-col gap-5">
            <b className="text-md text-white font-bold">
              {bioText.text9}
            </b>

            <p className="text-gray-300 text-md md:text-lg font-light">
              {bioText.text10}
              <b>{bioText.text11}</b>
              {bioText.text12}
            </p>

            <b className="text-md text-white font-bold">
              {bioText.text13}
            </b>
          </p>
        </details>
      </p>
    </>
  );
}
