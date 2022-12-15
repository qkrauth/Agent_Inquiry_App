import React from "react";

const Card = ({player}) => {
    return (
        <div>
            <h3>{player.name}</h3>
            <h3>{player.born}</h3>
            <h3>{player.role}</h3>
            <h3>{player.abilities}</h3>
            <h3>{player.ult}</h3>
            <img src={player.image} />

        </div>
    );
}

export default Card;