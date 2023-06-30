import { LanguageProvider } from "./context/LanguageContext";

import { Header } from "./components/Header";
import { Cover } from "./components/Cover";

function App() {
  return (
    <>
      <LanguageProvider>
        <Header />
        <Cover />
      </LanguageProvider>
    </>
  );
}

export default App;
