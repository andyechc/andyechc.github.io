import { createContext, useState } from "react";
import { translation } from "../utility/translation";

const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [text, setText] = useState(translation.es);

  const handleLanguage = (e) => {
    e.target.value === "es" ? setText(translation.es) : setText(translation.en);
  };

  const data = {
    text,
    handleLanguage,
  };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
}

export { LanguageProvider };
export default LanguageContext;
