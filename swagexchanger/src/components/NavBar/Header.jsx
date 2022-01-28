import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import css from "./Header.module.css";

export const Header = () => {
  return (
    <Navbar className={css.heading}>
      <Container>
        <Navbar.Brand href="#home">
          World's First Schwag Exchange Platform
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <img src="\images\user.png" alt="user" />{" "}
            <a href="#login">My Account</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
