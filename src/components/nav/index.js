import React from "react";
import NavMessage from "../navmessage";

import "./index.css";

const Nav = props => {
  return (
    <div className="navBar">
      <ul>
        <li className="navName">
          <h3>Clicky Game!</h3>
        </li>
        <li className="navMessage">
          <NavMessage />
        </li>
        <li className="navCounter">
          <h3>
            Current Score: {props.counter} | Top Score: {props.topScore}
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
