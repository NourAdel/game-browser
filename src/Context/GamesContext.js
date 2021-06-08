import axios from "axios";
import React, { createContext, useState } from "react";

export const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
  const [games, setsetGames] = useState([]);

  const getGames = () => {
    axios
      .get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"
      )
      .then((res) => {
        res.data.shift()
        setsetGames(res.data);
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
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export const { Consumer } = GamesContext;
