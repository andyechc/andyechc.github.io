import React, { Suspense, useRef } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

import { Header } from "./components/Header";
import { Home } from "./components/Cover";
import { About } from "./components/About";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <Home />
      <About />
    </LanguageProvider>
  );
}

export default App;
