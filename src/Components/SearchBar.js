import React, { useContext } from "react";
import { FilteringContext } from "../Context/FilteringContext";
import CloseIcon from "@material-ui/icons/Close";
import "../Styles/SearchBar.css";

function SearchBar() {
  const {
    searchTerm,
    setSearchTerm,
    onKeyPress,
    resetSearch,
    filteredSuggestions,
    onTextChange,
    showSuggestions,
  } = useContext(FilteringContext);

  const renderSuggestedItems = () => {
    return filteredSuggestions.map((item) => {
      return <h5>{item.title}</h5>;
    });
  };
  return (
    <div className="container">
      <div className="searchBarContainer">
        <div className="searchBar">
          <input
            onChange={(e) => onTextChange(e.target.value)}
            onKeyPress={(event) => {
              onKeyPress(event)
            }}
            placeholder={"Search..."}
            key="input"
            className="input"
            value={searchTerm}
          />

          {/* clear button */}
          {searchTerm !== "" && (
            <button
              className="icon resetIcon"
              onClick={(e) => {
                resetSearch();
              }}
            >
              <CloseIcon />
            </button>
          )}
        </div>

        <div className="autocompleteContainer">{renderSuggestedItems()}</div>
      </div>
    </div>
  );
}

export default SearchBar;
