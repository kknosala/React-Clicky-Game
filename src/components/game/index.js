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
    clicked: []
  };

  componentDidMount = () => {};

  handleCorrectGuess = id => {
    this.state.clicked.push(id);
    this.setState({ counter: this.state.counter + 1 });
  };

  handleIncorrectGuess = () => {
    if (this.state.counter > this.state.topScore) {
      this.setState({ topScore: this.state.counter });
    }
    this.resetData();
  };

  resetData = () => {
    this.setState({ counter: 0 });
    this.setState({ clicked: [] });
  };

  shuffleData = () => {};

  handleItemClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleCorrectGuess(id);
    } else {
      this.handleIncorrectGuess();
    }
  };

  render() {
    return (
      <div className="Game">
        <Nav counter={this.state.counter} topScore={this.state.topScore} />
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
