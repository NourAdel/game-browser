import React, { useContext } from "react";
import { FilteringContext } from "../Context/FilteringContext";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import "../Styles/SearchBar.css";
function SearchBar() {
  const { searchTerm, setSearchTerm, search } = useContext(FilteringContext);

  return (
    <div className="container">
      <div className="searchBar">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              search();
            }
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
              setSearchTerm("");
            }}
          >
            <CloseIcon />
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
