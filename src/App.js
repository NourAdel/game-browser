import SearchBar from "./Components/SearchBar";
import { FelteringDataProvider } from "./Context/FelteringContext";
function App() {
  return (
    <FelteringDataProvider>
      <div style={{ width: "100%" }}>
        <SearchBar />
      </div>
    </FelteringDataProvider>
  );
}

export default App;
