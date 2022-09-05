import React from "react";
import Item from "./Item";
import Create from "./Create";

const Card = () => {
  return (
    <div className="card-warp">
      <div className="card">
        <h1>Create.</h1>
        <Create />
      </div>
      <div className="card">
        <h1>Members.</h1>
        <Item />
      </div>
    </div>
  );
};

export default Card;
