import HomeScreen from "./Components/HomeScreen";
import { FelteringDataProvider } from "./Context/FelteringContext";
import { GamesProvider } from "./Context/GamesContext";
function App() {
  return (
    <FelteringDataProvider>
      <GamesProvider>
          <HomeScreen />
      </GamesProvider>
    </FelteringDataProvider>
  );
}

export default App;
