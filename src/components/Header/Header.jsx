import {useContext, useState } from "react";

import LanguageContext from "/src/context/LanguageContext";

import { Logo } from "../Logo";
import MenuDropDown from "/src/icons/MenuDropDown";
import MenuDropUp from "/src/icons/MenuDropUp";
import { TranslateButton } from "./TranslateButton";

import HeaderMenu from "./HeaderMenu";
import HeaderNav from "./HeaderNav";

export function Header() {
  const { text, handleLanguage } = useContext(LanguageContext);
  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setShow(!show);
  };

  return (
    <>
      <header className="bg-blue-950 w-full flex flex-col">
        <HeaderMenu show={show} />

        <div className="w-full max-w-[1000px] h-12 m-auto px-5 xl:px-0 border-t border-gray-600 md:border-0 flex justify-between items-center transition-all">
          <Logo />
          <HeaderNav />
          
          <div className="md:hidden flex items-center justify-center">
            <TranslateButton />
            {show ? <MenuDropUp onClick={handleMenu} /> : <MenuDropDown onClick={handleMenu} />}
          </div>
        </div>
      </header>
    </>
  );
}
