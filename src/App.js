import Calculator from "./components/Calculator";
import { CalculationContextProvider } from "./contexts/calculation.context";
import ThemeSwitch from "./components/ThemeSwitch";
import { useContext } from "react";
import ThemeContext from "./contexts/theme.context";

function App() {
  const { themeColor } = useContext(ThemeContext);
  return (
    <div className="app" id={themeColor}>
      <span className="background-text">cal.</span>
      <ThemeSwitch />
      <CalculationContextProvider>
        <Calculator />
      </CalculationContextProvider>
    </div>
  );
}

export default App;
