import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleNumberClick = (number) => {
    setDisplay(display + number);
  };

  const handleSymbolClick = (symbol) => {
    if (symbol === '=') {
      // Evaluate the expression in the display.
      const result = eval(display);
      setDisplay(result);
    } else {
      // Add the symbol to the display.
      setDisplay(display + symbol);
    }
  };

  const handleClearClick = () => {
    setDisplay('');
  };

  return (
    <div className="calculator">
      <input type="text" value={display} readOnly />
      <div className="buttons">
        <button type="button" onClick={() => handleNumberClick(1)}>1</button>
        <button type="button" onClick={() => handleNumberClick(2)}>2</button>
        <button type="button" onClick={() => handleNumberClick(3)}>3</button>
        <button type="button" onClick={() => handleSymbolClick('+')}>+</button>
        <button type="button" onClick={() => handleNumberClick(4)}>4</button>
        <button type="button" onClick={() => handleNumberClick(5)}>5</button>
        <button type="button" onClick={() => handleNumberClick(6)}>6</button>
        <button type="button" onClick={() => handleSymbolClick('-')}>-</button>
        <button type="button" onClick={() => handleNumberClick(7)}>7</button>
        <button type="button" onClick={() => handleNumberClick(8)}>8</button>
        <button type="button" onClick={() => handleNumberClick(9)}>9</button>
        <button type="button" onClick={() => handleSymbolClick('*')}>*</button>
        <button type="button" onClick={() => handleNumberClick(0)}>0</button>
        <button type="button" onClick={() => handleSymbolClick('.')}>.</button>
        <button type="button" onClick={() => handleClearClick()}>C</button>
        <button type="button" onClick={() => handleSymbolClick('=')}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
