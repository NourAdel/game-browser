import { useContext, useEffect } from "react";
import { GamesContext } from "../Context/GamesContext";
import SearchBar from "./SearchBar";

function HomeScreen() {
  const { getGames } = useContext(GamesContext);
  useEffect(() => {
    getGames();
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <SearchBar />
    </div>
  );
}

export default HomeScreen;
