import React from 'react'

//TYPES AND INTERFACES
export type EmptyInput = true | false;
export interface ContextProps {
  emptyFieldText: EmptyInput;
  myFunction: () => void;
}

// CONTEXT
export const globalContext = React.createContext<ContextProps | undefined>(undefined);
