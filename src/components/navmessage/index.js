import React, { Component } from "react";

class NavMessage extends Component {
  state = {
    message: "Click an image to begin!"
  };
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
      </div>
    );
  }
}

export default NavMessage;
