import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";

export function InfoTable() {
  const { text } = useContext(LanguageContext);

  return (
    <div className="w-full flex flex-wrap sm:flex-nowrap md:flex-wrap lg:flex-nowrap border border-gray-600 rounded-lg animate-appear">
      <div className="w-full p-10 flex flex-col justify-center items-center gap-5">
        <div className="w-full text-left">
          <span className="text-md font-bold text-white">
            {text.about.table.name}
          </span>
          <p className="text-md font-normal text-gray-500">Jose Andy</p>
        </div>

        <div className="w-full text-left">
          <span className="text-md font-bold text-white">Email</span>
          <p className="text-md font-normal text-gray-500">
            andevcode@gmail.com
          </p>
        </div>

        <div className="w-full text-left">
          <span className="text-md font-bold text-white">
            {text.about.table.phone}
          </span>
          <p className="text-md font-normal text-gray-500">+5356804881</p>
        </div>
      </div>

      <div className="w-full p-10 flex flex-col justify-center items-center gap-5 border-t sm:border-l sm:border-t-0 md:border-t md:border-l-0 lg:border-l lg:border-t-0 border-gray-600">
        <div className="w-full text-left">
          <span className="text-md font-bold text-white">
            {text.about.table.addres}
          </span>
          <p className="text-md font-normal text-gray-500">Habana, Cuba</p>
        </div>

        <div className="w-full text-left">
          <span className="text-md font-bold text-white">
            {text.about.table.birth}
          </span>
          <p className="text-md font-normal text-gray-500">5, feb, 2002</p>
        </div>

        <div className="w-full text-left">
          <span className="text-md font-bold text-white">Freelance</span>
          <p className="text-md font-normal text-gray-500">
            {text.about.table.freelance}
          </p>
        </div>
      </div>
    </div>
  );
}
