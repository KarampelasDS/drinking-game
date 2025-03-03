import { createContext, useState, useContext, useEffect } from "react";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("lang");
      if (savedLang) {
        setLang(savedLang);
      } else {
        setLang("en");
      }
    }
  }, []);

  function toggleLang() {
    const newLang = lang === "en" ? "gr" : "en";
    setLang(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", newLang);
    }
  }

  if (lang === null) {
    return null;
  }

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLangContext = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLangContext must be used within a LangProvider");
  }
  return context;
};
