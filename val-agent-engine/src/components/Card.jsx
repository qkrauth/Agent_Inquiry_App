import React from "react";

const Card = ({ player, addAgent, deleteAgent, team, teamId }) => {
  const cardButton = !team ? (
    <button onClick={() => addAgent(player)}>Add to Team</button>
  ) : (
    <button onClick={() => deleteAgent(teamId)}>Remove</button>
  );

  return (
    <div className="agent-card">
      <div className="agent-image">
        <img src={player?.image} alt="" />
      </div>
      <div className="card-text">
        <h3>Name: {player?.name}</h3>
        <h3>Born: {player?.born}</h3>
        <h3>Role: {player?.role}</h3>
        <h3>Abilities: {player?.abilities}</h3>
        <h3>Ult: {player?.ult}</h3>
      </div>
      <div className="card-button">
        {cardButton}
      </div>
    </div>
  );
};

export default Card;
