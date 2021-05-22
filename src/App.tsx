import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Components/DarkMode/Theme";
import { GlobalStyles } from "./Components/DarkMode/Global";
import Home from "./Pages/Home";

interface AppContextType {
  theme: string;
  toggleTheme: () => void;
}
export const AppContext = React.createContext<AppContextType | null>(null);

const App: React.FC = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <>
      <AppContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Router>
            <Switch>
              <Route path="/" component={Home} exact />
            </Switch>
          </Router>
        </ThemeProvider>
      </AppContext.Provider>
    </>
  );
};

export default App;
