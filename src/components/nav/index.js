import React from "react";
import NavMessage from "../navmessage";
import NavCounter from "../navcounter";
import "./index.css";

const Nav = () => {
  return (
    <div className="navBar">
      <h1 className="navName">Clicky Game!</h1>
      <NavMessage />
      <NavCounter />
    </div>
  );
};

export default Nav;
