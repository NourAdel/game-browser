import React, { createContext, useState } from "react";

export const FelteringContext = createContext();

export const FelteringDataProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <FelteringContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </FelteringContext.Provider>
  );
};

export const { Consumer } = FelteringContext;
