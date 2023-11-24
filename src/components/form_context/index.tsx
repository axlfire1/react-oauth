import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserContextProps {
  children: ReactNode;
}

const submitContext = createContext<boolean>(true);
const submitChangeContext = createContext<() => void>(() => {});

export function useSubmitContext() {
  return useContext(submitContext);
}

export function useChangeSubmitContext() {
  return useContext(submitChangeContext);
}

export function SubmitProvider(props: UserContextProps) {
  const [buttonDisabled, setButtonEnabled] = useState<boolean>(false);

  const changeButtonState = (newState: boolean) => {
    setButtonEnabled(newState);
  };

  return (
    <submitContext.Provider value={buttonDisabled}>
      <submitChangeContext.Provider value={changeButtonState}>
        {props.children}
      </submitChangeContext.Provider>
    </submitContext.Provider>
  );
}