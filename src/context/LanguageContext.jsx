import { createContext, useState, useEffect } from "react";
import { translation } from "../utility/translation";

const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");
  const [text, setText] = useState(translation.es);
  const cacheLanguage = JSON.parse(window.localStorage.getItem("language"));

  useEffect(() => {
    if (cacheLanguage === "es") {
      setLang(cacheLanguage), setText(translation.es);
    } else if (cacheLanguage === "en") {
      setLang(cacheLanguage), setText(translation.en);
    } else return;
  }, [cacheLanguage]);


  const handleLanguage = (e) => {
    if (e.target.value === "es") {
      const newLang = e.target.value;
      setText(translation.es);
      setLang(newLang);
      window.localStorage.setItem("language", JSON.stringify(newLang));
    } else {
      const newLang = e.target.value;
      setText(translation.en);
      setLang(newLang);
      window.localStorage.setItem("language", JSON.stringify(newLang));
    }
  };

  const data = {
    text,
    lang,
    handleLanguage,
  };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
}

export { LanguageProvider };
export default LanguageContext;
