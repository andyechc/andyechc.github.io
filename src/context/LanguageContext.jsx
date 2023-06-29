import { createContext, useState } from "react";
import { translation } from "../utility/translation";

const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');
  const [text, setText] = useState(translation.es);

  const handleLanguage = (e) => {
    if(e.target.value === "es"){
      setText(translation.es) 
      setLang('es')
    }else{
    setText(translation.en) 
    setLang('en')
    }
  }

  const data = {
    text,
    lang,
    handleLanguage
  };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
}

export { LanguageProvider };
export default LanguageContext;
