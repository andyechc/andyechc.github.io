import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

export function TranslateButton() {
  const { lang, handleLanguage } = useContext(LanguageContext);

  return (
    <div className="block p-6 flex justify-center items-center gap-3 text-xl accent-blue-600">
      <select
        className="w-14 px-2 rounded shadow focus:ring-4 ring-blue-600"
        value={lang}
        onChange={handleLanguage}
      >
        <option value="es">🇪🇸</option>
        <option value="en">🇺🇲</option>
      </select>
    </div>
  );
}
