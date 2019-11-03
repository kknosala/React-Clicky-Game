import React, { Component } from "react";
import "./index.css";
import Image from "../image";
import images from "../../images.json";

class ImageList extends Component {
  state = {
    images
  };

  handleClick = id => console.log(`Id is ${id}`);

  render() {
    return (
      <div className="imageList">
        {this.state.images.map(images => (
          <Image
            handleClick={this.handleClick}
            id={images.id}
            key={images.id}
            image={images.image}
          />
        ))}
      </div>
    );
  }
}

export default ImageList;
