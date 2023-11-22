import './numeric_input_component.css';
import React, { ChangeEvent, useState } from 'react';

const NumericInputComponent: React.FC = () => {

  const [numericValue, setNumericValue] = useState<number | ''>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;

    if (/^\d*$/.test(inputText)) { // Check if the input is a valid number
      // Update state if it's a valid number
      setNumericValue(inputText === '' ? '' : parseInt(inputText, 10));
    }
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
