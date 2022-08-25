import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [frontImage, setFrontImage]=useState(true)
  const images=frontImage===true ? pokemon.sprites.front : pokemon.sprites.back

  function handleClick(){
    setFrontImage((frontImage)=>!frontImage)
  }
  
  return (
    <Card>
      <div>
        <div className="image" onClick={handleClick}>
          <img src={images} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
