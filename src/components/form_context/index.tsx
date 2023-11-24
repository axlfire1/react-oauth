import { createContext, useContext, useState, ReactNode } from "react";

const submitContext = createContext<boolean>(true);

export function useSubmitContext() {
  return useContext(submitContext);
}

export function SubmitProvider(props: boolean) {
  const [buttonDisabled, setButtonEnabled] = useState<boolean>(false);

  return (
    buttonDisabled
  );
}