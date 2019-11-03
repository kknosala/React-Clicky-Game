import React from "react";
import "./index.css";

function Image(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          onClick={() => props.handleClick(props.id)}
          id={props.id}
          className="myImage"
          src={props.image}
          alt=""
        />
      </div>
    </div>
  );
}

export default Image;
