import React, { useContext } from "react";
import { FilteringContext } from "../Context/FilteringContext";
import SearchIcon from "@material-ui/icons/Search";
import "../Styles/SearchBar.css";
function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(FilteringContext);

  return (
    <div className="container">
      <div className="searchBar">
        {/* icon */}
        <button
          className="icon"
          onClick={(e) => {
            //apply search}
          }}
        >
          <SearchIcon />
        </button>

        {/* input */}
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              // apply search
            }
          }}
          placeholder={"Search..."}
          key="input"
          className="input"
          value={searchTerm}
        />
      </div>
    </div>
  );
}

export default SearchBar;
