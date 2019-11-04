import React from "react";
import "./index.css";

const Container = props => {
  return (
    <div className="container mt-3 justify-content-center">
      {props.children}
    </div>
  );
};

export default Container;
