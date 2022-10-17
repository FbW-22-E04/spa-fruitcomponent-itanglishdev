import React, { useState } from "react";

const colors = ["red", "blue", "green", "yellow", "purple"];

export default function Fruit({ type, deleteClickHandler }) {
  const [color, setColor] = useState("red");

  // task
  const handleChangeColor = () => {
    let newColor = Math.floor(Math.random() * colors.length);
    setColor(colors[newColor]);
  };

  return (
    <div>
      {type}, color = {color}
      {/* task: create a button that randomly changes the color to either red, blue, green, yellow or purple */}{" "}
      <button onClick={() => handleChangeColor()}>Change Color</button>
      <button onClick={() => deleteClickHandler(type)}>Delete Me</button>
    </div>
  );
}
