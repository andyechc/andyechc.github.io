import React, { Suspense, useRef } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <Home />
      <About />
      <Skills />
    </LanguageProvider>
  );
}

export default App;
