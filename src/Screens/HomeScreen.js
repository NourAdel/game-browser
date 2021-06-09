import { useContext, useEffect } from "react";
import { GamesContext } from "../Context/GamesContext";

// components
import SearchBar from "../Components/SearchBar";
import Sort from "../Components/Sort";
import GamesList from "../Components/GamesList";

function HomeScreen() {
  const { getGames } = useContext(GamesContext);

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <SearchBar />
      <Sort />
      <GamesList />
    </div>
  );
}

export default HomeScreen;
