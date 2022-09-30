import React, { useContext } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ThemeContext from "../contexts/theme.context";

function ThemeSwitch() {
  const { themeColor, setThemeColor } = useContext(ThemeContext);
  return (
    <div className="themeswitch">
      <LightModeIcon
        className={`light ${themeColor === "light" ? "light-active" : ""}`}
        onClick={() => {
          setThemeColor("light");
          window.localStorage.setItem("mode", JSON.stringify("light"));
        }}
      />
      <DarkModeIcon
        className={`dark ${themeColor === "dark" ? "dark-active" : ""}`}
        onClick={() => {
          setThemeColor("dark");
          window.localStorage.setItem("mode", JSON.stringify("dark"));
        }}
      />
    </div>
  );
}

export default ThemeSwitch;
