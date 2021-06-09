import React, { useContext } from "react";
import { FilteringContext } from "../Context/FilteringContext";
import CloseIcon from "@material-ui/icons/Close";
import "../Styles/SearchBar.css";

function SearchBar() {
  const {
    searchTerm,
    onKeyDown,
    resetSearch,
    filteredSuggestions,
    onTextChange,
    chooseSuggestion,
  } = useContext(FilteringContext);

  const renderSuggestedItems = () => {
    return filteredSuggestions.map((item, index) => {
      return (
        <button
          className="suggestion"
          onClick={() => chooseSuggestion(item)}
          key={item.title + index}
        >
          <h5>{item.title}</h5>
        </button>
      );
    });
  };
  return (
    <div className="container">
      <div className="searchBarContainer">
        <div className="searchBar">
          <input
            onChange={(e) => onTextChange(e.target.value)}
            onKeyDown={(event) => {
              onKeyDown(event);
            }}
            placeholder={"Search..."}
            key="input"
            className="input"
            value={searchTerm}
          />

          {searchTerm !== "" && (
            <React.Fragment>
              {/* clear button */}
              <button
                className="icon resetIcon"
                onClick={() => {
                  resetSearch();
                }}
              >
                <CloseIcon />
              </button>

              {/* search button for mobile users */}
              <button
                className="mobileSearch"
                onClick={() => onKeyDown({ keyCode: 13 })}
              >
                Search
              </button>
            </React.Fragment>
          )}
        </div>

        <div className="autocompleteContainer">{renderSuggestedItems()}</div>
      </div>
    </div>
  );
}

export default SearchBar;
