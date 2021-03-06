import React, { createContext, useContext, useState } from "react";
import { GamesContext } from "./GamesContext";

export const FilteringContext = createContext();

export const FilteringDataProvider = ({ children }) => {
  const { setGames, defaultGames, games } = useContext(GamesContext);

  const SORTBYVALUES = [
    "Default",
    "Title (accending)",
    "Title (descending)",
    "Platform",
    "Score",
  ];
  const PLATFORMS = [
    "PC",
    "PlayStation 3",
    "PlayStation Vita",
    "iPad",
    "Nintendo DS",
    "Nintendo 3DS",
    "Macintosh",
    "Xbox 360",
    "iPhone",
    "Android",
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByValue, setSortByValue] = useState("Default");
  const [sortOpen, setSortOpen] = useState(false);
  const [filteredSuggestions, setFilterdSuggestions] = useState([]);

  // when clicking on a suggestion from the autocomplete menu
  const chooseSuggestion = (item) => {
    let newArray = [...defaultGames];
    newArray = newArray.filter(function (game) {
      return game.title.toLowerCase() === item.title.toLowerCase();
    });
    setSortByValue("Default");
    setGames(newArray);
    setFilterdSuggestions([]);
  };

  // on search input changes
  const onTextChange = (e) => {
    setSearchTerm(e);
    if (e !== "") {
      let newArray = [...defaultGames];
      newArray = newArray.filter(function (game) {
        return game.title.toLowerCase().includes(e.toLowerCase());
      });
      setFilterdSuggestions(newArray);
    } else {
      resetSearch();
    }
  };

  // on pressing ENTER
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      let newArray = [...defaultGames];
      newArray = newArray.filter(function (game) {
        return game.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSortByValue("Default");
      setGames(newArray);
      setFilterdSuggestions([]);
    }
  };

  // reseting the list to no filters
  const resetSearch = () => {
    setSearchTerm("");
    setGames(defaultGames);
    setSortByValue("Default");
    setFilterdSuggestions([]);
  };

  const sort = (id) => {
    switch (id) {
      //default
      case 0:
        filteredSuggestions.length
          ? setGames([...filteredSuggestions])
          : setGames([...defaultGames]);
        break;

      // title (accending)
      case 1:
        let newArray1 = [...games];
        newArray1.sort(function (a, b) {
          if (a.title > b.title) {
            return 1;
          }
          if (b.title > a.title) {
            return -1;
          }
          return 0;
        });
        setGames(newArray1);

        break;

      // title (deccending)
      case 2:
        let newArray = [...games];
        newArray.sort(function (a, b) {
          if (a.title > b.title) {
            return -1;
          }
          if (b.title > a.title) {
            return 1;
          }
          return 0;
        });
        setGames(newArray);

        break;

      // platform
      case 3:
        let newArray3 = [...games];
        newArray3.sort(function (a, b) {
          if (PLATFORMS.indexOf(a.platform) > PLATFORMS.indexOf(b.platform)) {
            return 1;
          }
          if (PLATFORMS.indexOf(b.platform) > PLATFORMS.indexOf(a.platform)) {
            return -1;
          }
          return 0;
        });
        console.log(newArray3);
        setGames(newArray3);

        break;

      // score
      case 4:
        let newArray4 = [...games];
        newArray4.sort(function (a, b) {
          if (a.score > b.score) {
            return -1;
          }
          if (b.score > a.score) {
            return 1;
          }
          return 0;
        });
        setGames(newArray4);

        break;

      default:
        break;
    }
  };

  // choosing a sort-by
  const handleSortClose = (event) => {
    const { id } = event.target;
    if (id) setSortByValue(SORTBYVALUES[id]);
    sort(parseInt(id));
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
        sortByValue,
        setSortByValue,
        sortOpen,
        setSortOpen,
        handleSortListKeyDown,
        handleSortToggle,
        handleSortClose,
        SORTBYVALUES,
        onKeyDown,
        resetSearch,
        filteredSuggestions,
        onTextChange,
        chooseSuggestion,
      }}
    >
      {children}
    </FilteringContext.Provider>
  );
};

export const { Consumer } = FilteringContext;
