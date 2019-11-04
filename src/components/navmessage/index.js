import React from "react";
import "./index.css";

const NavMessage = props => {
  return (
    <div>
      <h3 className={props.mode}>{props.message}</h3>
    </div>
  );
};

export default NavMessage;
