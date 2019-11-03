import React, { Component } from "react";

class NavMessage extends Component {
  state = {
    message: "Click an image to begin!"
  };
  render() {
    return (
      <div className="navMessage">
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

export default NavMessage;
