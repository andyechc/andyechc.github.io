import React, { Suspense, useContext, useState } from "react";

import LanguageContext from "../context/LanguageContext";

import { Logo } from "../components/Logo";
import MenuDropDown from "../icons/MenuDropDown";
import MenuDropUp from "../icons/MenuDropUp";

const HeaderMenu = React.lazy(() => import("../components/HeaderMenu"));
const HeaderNav = React.lazy(() => import("../components/HeaderNav"));

export function Header() {
  const { text, handleLanguage } = useContext(LanguageContext);
  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setShow(!show);
  };

  return (
    <>
      <header className="bg-blue-950 w-full flex flex-col">
        <Suspense>
          <HeaderMenu show={show} />
        </Suspense>

        <div className="bg-blue-950 w-full max-w-[1000px] h-12 m-auto px-5 xl:px-0 border-t border-gray-600 md:border-0 flex justify-between items-center transition-all">
          <Logo />

          <Suspense>
            <HeaderNav />
          </Suspense>

          {show ? (
            <MenuDropUp onClick={handleMenu} />
          ) : (
            <MenuDropDown onClick={handleMenu} />
          )}
        </div>
      </header>
    </>
  );
}
