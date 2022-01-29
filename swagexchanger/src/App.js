import "./App.css";
import { Header } from "./components/NavBar/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Posts } from "./components/Posts/Posts";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Posts />
    </div>
  );
}

export default App;
