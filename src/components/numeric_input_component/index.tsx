import './numeric_input_component.css';
import React, { ChangeEvent, useState } from 'react';

const NumericInputComponent: React.FC = () => {
  const [numericValue, setNumericValue] = useState<number | ''>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;

    // Check if the input is a valid number
    if (/^\d*$/.test(inputText)) {
      // Update state if it's a valid number
      setNumericValue(inputText === '' ? '' : parseInt(inputText, 10));
    }
    // You can add additional handling for invalid input if needed
  };

  return (
    <input
      className="numeric_input"
      type="text"
      id='numeric_input'
      value={numericValue === '' ? '' : numericValue.toString()}
      onChange={handleInputChange}
      placeholder="Ingresar Número"
    />
  );
};

export default NumericInputComponent;
