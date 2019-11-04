import React, { Component } from "react";
import images from "../../images.json";
import Container from "../container";
import ClickItem from "../clickitem";
import Nav from "../nav";
import Header from "../header";

class Game extends Component {
  state = {
    images,
    counter: 0,
    topScore: 0,
    clicked: [],
    message: "Click an image to begin!",
    mode: "white"
  };

  componentDidMount = () => {
    this.shuffleData();
  };

  handleCorrectGuess = id => {
    this.state.clicked.push(id);
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ message: "You were correct!" });
    this.setState({ mode: "green" });
  };

  handleIncorrectGuess = () => {
    if (this.state.counter > this.state.topScore) {
      this.setState({ topScore: this.state.counter });
    }
    this.setState({ message: "You were wrong! Try again!" });
    this.setState({ mode: "red" });
    this.resetData();
  };

  resetData = () => {
    this.setState({ counter: 0 });
    this.setState({ clicked: [] });
  };

  shuffleData = () => {
    images.sort(() => {
      return 0.5 - Math.random();
    });
  };

  handleItemClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleCorrectGuess(id);
    } else {
      this.handleIncorrectGuess();
    }
    this.shuffleData();
  };

  render() {
    return (
      <div className="Game">
        <Nav
          counter={this.state.counter}
          topScore={this.state.topScore}
          message={this.state.message}
          mode={this.state.mode}
        />
        <Header />
        <Container>
          {this.state.images.map(image => (
            <ClickItem
              id={image.id}
              key={image.id}
              image={image.image}
              handleItemClick={this.handleItemClick}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default Game;
