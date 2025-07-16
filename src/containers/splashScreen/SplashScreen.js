import React, {useContext} from "react";
import "./SplashScreen.css";
import D20Die from "../../components/D20Die/D20Die";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  
  const handleRollComplete = (rolledNumber) => {
    console.log(`D20 rolled: ${rolledNumber}`);
  };

  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <D20Die onRollComplete={handleRollComplete} />
      </div>
    </div>
  );
}
