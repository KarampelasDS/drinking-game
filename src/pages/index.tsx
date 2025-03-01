import React from "react";
import { Button } from "@mui/material";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="home">
      <div className="logoHeader">
        <img src="/Images/Logo/LogoText.png" />
        <img src="/Images/Logo/Logo.png" />
        <h3 className="logoText">
          The ultimate drinking game for you <br /> and your friends!
        </h3>
      </div>
      <div className="games">
        <div className="gamesTitle">
          <h1>Pick your poison!</h1>
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
