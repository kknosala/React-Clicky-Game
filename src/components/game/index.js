import React, { Component } from "react";
import images from "../../images.json";
import Container from "../container";
import ClickItem from "../clickitem";

class Game extends Component {
  state = {
    images
  };

  componentDidMount = () => {};

  handleCorrectGuess = () => {};

  handleIncorrectGuess = () => {};

  resetData = () => {};

  shuffleData = () => {};

  handleItemClick = () => {};

  render() {
    return (
      <div className="Game">
        <Container>
          {this.state.images.map(image => (
            <ClickItem id={image.id} key={image.id} image={image.image} />
          ))}
        </Container>
      </div>
    );
  }
}

export default Game;
