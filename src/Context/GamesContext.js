import axios from "axios";
import React, { createContext, useState } from "react";

export const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
  let DATA = [];
  const [games, setsetGames] = useState([]);
  const [colors, setColors] = useState([]);

  const generateColors = (data) => {
    let generes = [];
    let colors = {};
    data.forEach((element) => {
      let elementGenres = element.genre.replace(/\s/g, "").split(",");
      elementGenres.forEach((genre) => {
        if (!generes.includes(genre) && genre !== "") {
          let r =  110 + Math.floor(Math.random() * (255 - 110 + 1));
          let g =  110 + Math.floor(Math.random() * (255 - 110 + 1));
          let b =  110 + Math.floor(Math.random() * (255 - 110 + 1));

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

        setsetGames(res.data);
        DATA = res.data;
      })
      .catch((err) => {
        // add a message to the user
        console.log(err);
      });
  };

  return (
    <GamesContext.Provider
      value={{
        games,
        getGames,
        colors,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export const { Consumer } = GamesContext;
