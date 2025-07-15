import React, { useState } from "react";
import "./App.scss";
import Main from "./containers/Main";
import { StyleProvider } from "./contexts/StyleContext";

function App() {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <StyleProvider value={{ isDark, setIsDark }}>
      <div>
        <Main />
      </div>
    </StyleProvider>
  );
}

export default App;
