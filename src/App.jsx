import { LanguageProvider } from "./context/LanguageContext";

import { Header } from "./components/Header";

function App() {
  return (
    <>
      <LanguageProvider>
        <Header />
      </LanguageProvider>
    </>
  );
}

export default App;
