import { useState } from "react";

function App() {
  const CreateDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(i);
    }
    return digits.map((digit) => (
      <button key={digit} onClick={() => handleNumbers(digit)}>
        {digit}
      </button>
    ));
  };

  const [display, setDisplay] = useState("0");
  const [result, setResult] = useState("0");
  const [showDisplay, setShowDisplay] = useState(false);
  const [decimalUsed, setDecimalUsed] = useState(false);
  const ops = ["/", "*", "+", "-"];

  function handleOperations(operators) {
    if (!showDisplay) {
      setShowDisplay(true);
      setDisplay(display + operators);
    }

    if (!ops.includes(display.slice(-1))) {
      setDisplay(display + operators);
      setDecimalUsed(false);
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
  }

  function handleCalculate() {
    setDisplay(result);
    setShowDisplay(false);

    if (result.includes(".")) {
      setDecimalUsed(true);
    }
  }

  return (
    <div className="app">
      <div className="calculator">
        <div className="display">
          <div>{showDisplay && display}</div>
          <div>{result}</div>
        </div>
        <div className="buttons">
          <div className="operators">
            <button onClick={() => handleOperations("/")}>/</button>
            <button onClick={() => handleOperations("*")}>*</button>
            <button onClick={() => handleOperations("+")}>+</button>
            <button onClick={() => handleOperations("-")}>-</button>
          </div>
          <div className="digits">
            <CreateDigits />
            <button onClick={handleDecimal}>.</button>
            <button onClick={() => handleNumbers(0)}>0</button>
            <button onClick={handleDelete}>DEL</button>
            <button onClick={handleClear}>AC</button>
            <button onClick={handleCalculate}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
