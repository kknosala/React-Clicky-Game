import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Header from "./components/header";
import Game from "./components/game";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Game />
    </div>
  );
}

export default App;
