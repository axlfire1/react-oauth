import './green_submit_button.css'
import React from 'react';

interface ComponentProps {  
  isSubmitDisabled: boolean;
}
 
const GreenSubmitButton: React.FC<ComponentProps> = ({isSubmitDisabled}) => {
  console.log(isSubmitDisabled);
  return (
    <input
      disabled={isSubmitDisabled}
      id="greenButton"
      type="submit"
      value="Registrar"
      className='numeric_input'
    />
  )
}

export {GreenSubmitButton}
