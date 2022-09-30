import React, { useEffect, useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CalculationContext from "../contexts/calculation.context";
import ThemeContext from "../contexts/theme.context";

function Buttons() {
  const {
    display,
    handleNumbers,
    handleOperations,
    handleDelete,
    handleDecimal,
    handleClear,
    handleCalculate,
  } = useContext(CalculationContext);
  const { themeColor } = useContext(ThemeContext);

  // enable keyboard inputs
  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [display]);

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operations = ["+", "-", "*", "/"];
  const deleteButton = ["Backspace"];
  const decimal = ["."];
  const calculate = ["Enter"];

  function handleKey(e) {
    if (numbers.includes(e.key)) handleNumbers(e.key);
    if (operations.includes(e.key)) handleOperations(e.key);
    if (deleteButton.includes(e.key)) handleDelete();
    if (decimal.includes(e.key)) handleDecimal();
    if (calculate.includes(e.key)) handleCalculate();
  }

  const CreateDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(i);
    }
    return digits.map((digit) => (
      <button key={digit} tabIndex="-1" onClick={() => handleNumbers(digit)}>
        {digit}
      </button>
    ));
  };

  return (
    <div className="buttons">
      <div className="operators">
        <button tabIndex="-1" onClick={() => handleOperations("+")}>
          <AddIcon />
        </button>
        <button tabIndex="-1" onClick={() => handleOperations("-")}>
          <RemoveIcon />
        </button>
        <button tabIndex="-1" onClick={() => handleOperations("*")}>
          <CloseIcon />
        </button>
        <button tabIndex="-1" onClick={() => handleOperations("/")}>
          <img
            style={{ width: "12px" }}
            src={
              themeColor === "light"
                ? "/divide(black).png"
                : "/divide(white).png"
            }
          />
        </button>
      </div>
      <div className="digits">
        <CreateDigits />
        <button tabIndex="-1" onClick={handleDelete}>
          <ChevronLeftIcon />
        </button>
        <button tabIndex="-1" onClick={() => handleNumbers(0)}>
          0
        </button>
        <button tabIndex="-1" onClick={handleDecimal}>
          .
        </button>
      </div>
      <button className="clear-button" tabIndex="-1" onClick={handleClear}>
        AC
      </button>
      <button className="result-button" tabIndex="-1" onClick={handleCalculate}>
        =
      </button>
    </div>
  );
}

export default Buttons;
