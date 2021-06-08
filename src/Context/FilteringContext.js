import React, { createContext, useState } from "react";

export const FilteringContext = createContext();

export const FilteringDataProvider = ({ children }) => {
  const SORTBYVALUES = [
    "Default",
    "Title (accending)",
    "Title (descending)",
    "Platform",
    "Score",
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByValue, setSortByValue] = useState("Default");
  const [sortOpen, setSortOpen] = useState(false);

  // sorting functions
  const handleSortClose = (event) => {
    const { id } = event.target;
    if (id) setSortByValue(SORTBYVALUES[id]);
    setSortOpen(false);
  };
  const handleSortToggle = () => {
    setSortOpen(!sortOpen);
  };
  const handleSortListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setSortOpen(false);
    }
  };

  return (
    <FilteringContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        sortByValue,
        setSortByValue,
        sortOpen,
        setSortOpen,
        handleSortListKeyDown,
        handleSortToggle,
        handleSortClose,
        SORTBYVALUES,
      }}
    >
      {children}
    </FilteringContext.Provider>
  );
};

export const { Consumer } = FilteringContext;
