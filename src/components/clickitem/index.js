import React from "react";
import "./index.css";

const ClickItem = props => {
  return (
    <div className="card m-3">
      <img src={props.image} id={props.id} className="cardImage" alt="" />
    </div>
  );
};

export default ClickItem;
