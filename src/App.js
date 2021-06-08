import HomeScreen from "./Screens/HomeScreen";
import { FilteringDataProvider } from "./Context/FilteringContext";
import { GamesProvider } from "./Context/GamesContext";
function App() {
  return (
    <GamesProvider>
      <FilteringDataProvider>
        <HomeScreen />
      </FilteringDataProvider>
    </GamesProvider>
  );
}

export default App;
