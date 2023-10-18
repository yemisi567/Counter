import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCounter from "./useCounter";

export default function Counter() {
  const history = useNavigate();
  const { count, increment, decrement, reset, setValue } = useCounter();
  const [customValue, setCustomValue] = useState(""); // State for custom value

  const handleSetCustomValue = () => {
    // Check if the input is a valid number
    const numericValue = parseFloat(customValue);
    if (!isNaN(numericValue)) {
      setValue(numericValue);
      setCustomValue(""); // Clear the input field
    }
  };

  const triggerError = () => {
    try {
      // this is me trying to access a property of undefined
      let someUndefinedVariable;
      const undefinedVariable = someUndefinedVariable.property;
      return undefinedVariable;
    } catch (error) {
      // when an error occurs, i navigate to the error page
      history("/error");
    }
  };

  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
      <button className="counter-button" onClick={decrement}>
        Decrement
      </button>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
      <div className="custom-value-container">
        <input
          type="number"
          placeholder="Enter a value"
          value={customValue}
          onChange={(e) => setCustomValue(e.target.value)}
        />
        <button className="counter-button" onClick={handleSetCustomValue}>
          Set Custom Value
        </button>
      </div>
      <button onClick={triggerError} className="counter-button">
        {" "}
        Trigger an Error
      </button>
    </div>
  );
}
