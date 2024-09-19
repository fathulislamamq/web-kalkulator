// Calculator.js
import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); // Use eval carefully
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <div className="mb-4">
          <input
            type="text"
            value={input}
            disabled
            className="w-full text-right text-3xl p-4 bg-gray-200 rounded-lg focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {/* Row 1 */}
          <button onClick={() => handleClick('7')} className="bg-gray-300 p-4 text-2xl rounded-lg">7</button>
          <button onClick={() => handleClick('8')} className="bg-gray-300 p-4 text-2xl rounded-lg">8</button>
          <button onClick={() => handleClick('9')} className="bg-gray-300 p-4 text-2xl rounded-lg">9</button>
          <button onClick={() => handleClick('/')} className="bg-blue-500 text-white p-4 text-2xl rounded-lg">/</button>

          {/* Row 2 */}
          <button onClick={() => handleClick('4')} className="bg-gray-300 p-4 text-2xl rounded-lg">4</button>
          <button onClick={() => handleClick('5')} className="bg-gray-300 p-4 text-2xl rounded-lg">5</button>
          <button onClick={() => handleClick('6')} className="bg-gray-300 p-4 text-2xl rounded-lg">6</button>
          <button onClick={() => handleClick('*')} className="bg-blue-500 text-white p-4 text-2xl rounded-lg">*</button>

          {/* Row 3 */}
          <button onClick={() => handleClick('1')} className="bg-gray-300 p-4 text-2xl rounded-lg">1</button>
          <button onClick={() => handleClick('2')} className="bg-gray-300 p-4 text-2xl rounded-lg">2</button>
          <button onClick={() => handleClick('3')} className="bg-gray-300 p-4 text-2xl rounded-lg">3</button>
          <button onClick={() => handleClick('-')} className="bg-blue-500 text-white p-4 text-2xl rounded-lg">-</button>

          {/* Row 4 */}
          <button onClick={clearInput} className="bg-red-500 text-white p-4 text-2xl rounded-lg">C</button>
          <button onClick={() => handleClick('0')} className="bg-gray-300 p-4 text-2xl rounded-lg">0</button>
          <button onClick={calculateResult} className="bg-green-500 text-white p-4 text-2xl rounded-lg">=</button>
          <button onClick={() => handleClick('+')} className="bg-blue-500 text-white p-4 text-2xl rounded-lg">+</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
