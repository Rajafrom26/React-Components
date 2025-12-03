import React, { children, createContext, useState } from "react";

export const myState = createContext();

const ContextProvider = ({ children }) => {
  const [query, setQuery] = useState("");

  return (
    <myState.Provider value={[query, setQuery]}>{children}</myState.Provider>
  );
};

export default ContextProvider;
