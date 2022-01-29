import { React, useEffect } from "react";
import "./App.css";
import { Header } from "./components/NavBar/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Posts } from "./components/Posts/Posts";

const App = () => {
  /*useEffect(() => {
    axios
      .get("https://schwagx.herokuapp.com/swags/")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);*/
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Posts />
    </div>
  );
};

export default App;
