import { React, useEffect } from "react";
import "./App.css";
import { Header } from "./components/NavBar/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Posts } from "./components/Posts/Posts";
import axios from "axios";

const App = () => {
  useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Posts />
    </div>
  );
};

export default App;
