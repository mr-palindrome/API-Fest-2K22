import { React, useEffect } from "react";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import { Header } from "./components/NavBar/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Posts } from "./components/Posts/Posts";
import { SwagForm } from "./components/Form/Form";

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
      <Row>
        <Col sm={8}>
          <Posts />
        </Col>
        <Col sm={4}>
          <SwagForm />
        </Col>
      </Row>
    </div>
  );
};

export default App;
