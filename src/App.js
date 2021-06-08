import HomeScreen from "./Components/HomeScreen";
import { FilteringDataProvider } from "./Context/FilteringContext";
import { GamesProvider } from "./Context/GamesContext";
function App() {
  return (
    <FilteringDataProvider>
      <GamesProvider>
          <HomeScreen />
      </GamesProvider>
    </FilteringDataProvider>
  );
}

export default App;
