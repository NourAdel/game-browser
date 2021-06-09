import axios from "axios";
import React, { createContext, useState } from "react";

export const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
  const [defaultGames, setDefaultGames] = useState([]);
  const [games, setGames] = useState([]);
  const [colors, setColors] = useState([]);
  const [loader, setLoader] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  // generates a random bright color for every unique genre
  const generateColors = (data) => {
    let generes = [];
    let colors = {};
    data.forEach((element) => {
      let elementGenres = element.genre.replace(/\s/g, "").split(",");
      elementGenres.forEach((genre) => {
        if (!generes.includes(genre) && genre !== "") {
          let r = 110 + Math.floor(Math.random() * (255 - 110 + 1));
          let g = 110 + Math.floor(Math.random() * (255 - 110 + 1));
          let b = 110 + Math.floor(Math.random() * (255 - 110 + 1));

          colors[genre] = `rgb(${r},${g},${b})`;
        }
      });
    });
    setColors(colors);
  };

  const getGames = () => {
    axios
      .get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"
      )
      .then((res) => {
        res.data.shift();
        generateColors(res.data);
        setGames(res.data);

        // preserving a version of the data's oraginal sort
        setDefaultGames(res.data);

        setLoader(false);
      })
      .catch((err) => {
        setErrorMessage(true);
      });
  };

  return (
    <GamesContext.Provider
      value={{
        games,
        getGames,
        colors,
        setGames,
        defaultGames,
        loader,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export const { Consumer } = GamesContext;
