// STYLE SHEETS
import './register_form.css';

// COMPONENTS
import React, { useState } from 'react';
import NumericInputComponent from '../numeric_input_component';
import { GreenSubmitButton } from '../green_submit_button';
import { handleSubmit } from '../../functions/handle_submit';

//TYPES AND INTERFACES
export type EmptyInput = true | false;
export interface ContextProps {
  emptyFieldText: EmptyInput;
  myFunction: () => void;
}

// CONTEXT
export const globalContext = React.createContext<ContextProps | undefined>(undefined);

export const RegisterForm = (): JSX.Element => {
  const [emptyTextField, setEmptyTextField] = useState<EmptyInput>(true);

  const contextValue: ContextProps = {
    emptyFieldText: emptyTextField,
    myFunction: () => setEmptyTextField((prev) => !prev),
  };

  return (
    <globalContext.Provider value={contextValue}>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-100">
              <NumericInputComponent />
            </div>
          </div>
          <div className="row">
            <div className="col-100">
              <GreenSubmitButton />
            </div>
          </div>
        </form>
      </div>
    </globalContext.Provider>
  );
};
