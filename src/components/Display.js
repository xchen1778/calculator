import React, { useContext } from "react";
import CalculationContext from "../contexts/calculation.context";

function Display() {
  const { showDisplay, display, result } = useContext(CalculationContext);
  return (
    <div className="display">
      <div className="display-progress">{showDisplay && display}</div>
      <div className="display-result">{result}</div>
    </div>
  );
}

export default Display;
