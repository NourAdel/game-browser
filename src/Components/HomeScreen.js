import { useContext, useEffect } from "react";
import { GamesContext } from "../Context/GamesContext";
import SearchBar from "./SearchBar";
import Sort from "./Sort";
function HomeScreen() {
  const { getGames } = useContext(GamesContext);
  useEffect(() => {
    getGames();
  }, []);
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <SearchBar />
      <Sort />
      {/* <Filters /> */}
    </div>
  );
}

export default HomeScreen;
