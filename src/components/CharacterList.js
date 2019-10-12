import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";


export default function CharacterList(props) {
  const [characters, setCharacters] = useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  let searchedCharacters = characters.filter(char => {
    if (char.name.toLowerCase().indexOf(props.name.toLowerCase()) > -1) {
      return char;
    } else {
      return null;
    }
  });

  return (
    <section className="character-list gridCardyCards">
      {searchedCharacters.map(character => {
        return (
          <CharacterCard
            img={character.image}
            name={character.name}
            location={character.location.name}
            species={character.species}
          />
        );
      })}
    </section>
  );
}



