import React, { useState } from "react";

const Item = () => {
  const [card, setCard] = useState([
    {
      id: 1,
      no: "1.",
      name: "Alfian Widjaya",
      email: "alfianmuhammad34@gmail.com",
    },
    {
      id: 1,
      no: "2.",
      name: "Sulton A Parera",
      email: "sultonaulia10@gmail.com",
    },
    {
      id: 1,
      no: "3.",
      name: "Dikam Purnama",
      email: "dikampurnama22@gmail.com",
    },
    {
      id: 1,
      no: "1",
      name: "Deviet Jhonny",
      email: "pasabesi33@gmail.com",
    },
  ]);
  return (
    <div className="card-item">
      {card.map((list) => (
        <div className="item" key={list.id}>
          <h3>{list.no}</h3>
          <h1>{list.name}</h1>
          <h2>{list.email}</h2>
          <div className="btn">
            <button id="edit">Edit</button>
            <button id="delet">Delet</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
