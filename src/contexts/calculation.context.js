import { createContext, useState } from "react";

const CalculationContext = createContext();

export function CalculationContextProvider({ children }) {
  const [display, setDisplay] = useState("0");
  const [showDisplay, setShowDisplay] = useState(false);
  const [result, setResult] = useState("0");
  const [decimalUsed, setDecimalUsed] = useState(false);
  const ops = ["/", "*", "+", "-"];

  function handleOperations(operators) {
    if (!showDisplay) {
      setShowDisplay(true);
      setDisplay(`${display} ${operators} `);
    }

    if (!ops.includes(display.slice(-2)[0])) {
      setDisplay(`${display} ${operators} `);
      setDecimalUsed(false);
    } else {
      setDisplay(`${display.slice(0, -2)} ${operators} `);
    }
  }

  function handleNumbers(num) {
    const newDisplay = (display === "0" ? "" : display) + num.toString();
    setDisplay(newDisplay);
    setResult(eval(newDisplay).toString());
    setShowDisplay(true);
  }

  function handleDecimal() {
    if (!showDisplay && !decimalUsed) {
      setShowDisplay(true);
      setDisplay(display + ".");
      setDecimalUsed(true);
    }
    if (display.slice(-1) !== "." && !decimalUsed) {
      setDisplay(display + ".");
      setDecimalUsed(true);
    }
    setResult(eval(display).toString());
    setShowDisplay(true);
  }

  function handleDelete() {
    if (display.length === 1 || !showDisplay) {
      setDisplay("0");
      setResult("0");
      setShowDisplay(false);
    } else {
      const newDisplay = display.slice(0, -1);
      setDisplay(newDisplay);
      setResult(eval(newDisplay).toString());
    }

    if (display.slice(-1) === ".") {
      setDecimalUsed(false);
    }
  }

  function handleClear() {
    setDisplay("0");
    setResult("0");
    setShowDisplay(false);
    document.querySelector(".clear-button").blur();
  }

  function handleCalculate() {
    setDisplay(result);
    setShowDisplay(false);

    if (result.includes(".")) {
      setDecimalUsed(true);
    }
  }

  return (
    <CalculationContext.Provider
      value={{
        showDisplay,
        display,
        setDisplay,
        result,
        handleOperations,
        handleDelete,
        handleNumbers,
        handleDecimal,
        handleClear,
        handleCalculate,
      }}
    >
      {children}
    </CalculationContext.Provider>
  );
}

export default CalculationContext;
