import React, { Component } from "react";
import "./index.css";

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div className="counter">
        <p>Current Score: {this.state.count}</p>
      </div>
    );
  }
}

export default Counter;
