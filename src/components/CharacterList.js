  
import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
      axios 
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setCharacter(res.data.results);
        // console.log(res.data.results);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <div className="character-list">
      {character.map(character => {
        console.log(character);
        return <CharacterCard key={character.id} character={character} />;
})}
    </div>
  );
}



