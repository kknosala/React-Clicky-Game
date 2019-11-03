import React, { Component } from "react";

class NavCounter extends Component {
  state = {
    counter: 0,
    topScore: 0
  };
  render() {
    return (
      <div className="navCounter">
        <h3>
          Current Score: {this.state.counter} | Top Score: {this.state.topScore}
        </h3>
      </div>
    );
  }
}

export default NavCounter;
