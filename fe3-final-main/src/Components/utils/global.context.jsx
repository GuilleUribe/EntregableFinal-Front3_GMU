import { createContext } from "react";
import { useState } from "react";

export const initialState = {
  themes: {
    light: {
      backgroundHome: "rgba(204,204,204,0.45)",
      backgroundNav: " rgba(211,210,213,1)",
      backgroundCard: "rgba(200,200,209,0.25)",
      color: "black",
      inverted: "invert(0)",
      themeButtonIcon: "🌙"
    },
    dark: {
      backgroundNav: "rgba(24,24,27,1)",
      backgroundHome: "rgba(14,14,16,1)",
      backgroundCard: "rgba(31,31,35,1)",
      color: "white",
      inverted: "invert(1)",
      themeButtonIcon: "☀"
    },

  },
};

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {

  const [Theme, setTheme] = useState(initialState.themes.light);

  const handleThemeChange = () => {
    if (Theme === initialState.themes.dark) setTheme(initialState.themes.light);
    if (Theme === initialState.themes.light) setTheme(initialState.themes.dark);
  };

  const [Favs, setFavs] = useState(
    JSON.parse(localStorage.getItem("favs") || "[]")
  );

  return (
    <ContextGlobal.Provider value={{ Theme, handleThemeChange, Favs, setFavs }}>
      {children}
    </ContextGlobal.Provider>
  );
};