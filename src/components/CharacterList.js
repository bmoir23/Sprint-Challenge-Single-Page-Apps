import React, { useEffect, useState } from "react";

import React, { useEffect, useState } from 'react';
import axios from "axios";
import CharacterCard from './CharacterCard';




export default function CharacterList() {
  const [character, setCharacter] = useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(res=>{
      setCharacter(res.data.results);
      console.log(res.data.results);
    })
    .catch(error => {
      console.error("Uh oh Morty, We Fu*ked this one up!", error);
    });
  }, []);

  return (

    <div className="character-list">
      {character.map(character => {
        console.log(character);
        return <CharacterCard key={character.id} character={character} />
      })}
    </div>
    // <section className="character-list">
    //   <h2>TODO: `array.map()` over your state here!</h2>
    // </section>
  );
}
