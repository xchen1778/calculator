import { createContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [themeColor, setThemeColor] = useState(
    JSON.parse(window.localStorage.getItem("mode")) || "light"
  );

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
