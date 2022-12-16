import React from "react";

const Card = ({ player }) => {
  return (
    <div className="agent-card">
      <div className="agent-image">
        <img src={player.image} alt=""/>
      </div>
      <h3>Name: {player.name}</h3>
      <h3>Born: {player.born}</h3>
      <h3>Role: {player.role}</h3>
      <h3>Abilities: {player.abilities}</h3>
      <h3>Ult: {player.ult}</h3>
      <div>
        <button>Add To Team</button>
      </div>
    </div>
  );
};

export default Card;
