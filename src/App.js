import { useState } from "react";
import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";
import GlobalStyles, { lightTheme, darkTheme } from "./styles";

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Home toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
