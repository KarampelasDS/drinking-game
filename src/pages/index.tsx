import React from "react";
import { Button } from "@mui/material";
import Navbar from "@/components/Navbar/Navbar";
import { useLangContext } from "@/components/LangContext";
import LanguageToggle from "@/components/LanguageToggle/LanguageToggle";

export default function Home() {
  const { lang, setLang } = useLangContext();
  return (
    <div className="home">
      <LanguageToggle />
      <div className="logoHeader">
        <img src="/Images/Logo/LogoText.png" />
        <img src="/Images/Logo/Logo.png" />
        <h3 className="logoText">
          {lang === "en"
            ? "The ultimate drinking game for you and your friends!"
            : "Το απόλυτο παιχνίδι ποτού για εσάς και τους φίλους σας!"}
        </h3>
      </div>
      <div className="games">
        <div className="gamesTitle">
          <h1>
            {lang === "en" ? "Pick your poison!" : "Διάλεξε το δηλητήριο σου!"}
          </h1>
        </div>
        <div className="gameButtons">
          <img
            className="gameButton"
            id="gameButton1"
            src="/Images/GuiltyAsCharged.png"
          />
          <img
            className="gameButton"
            id="gameButton2"
            src="/Images/TruthOrDrink.png"
          />
          <img
            className="gameButton"
            id="gameButton3"
            src="/Images/DrinkReaper.png"
          />
        </div>
      </div>
    </div>
  );
}
