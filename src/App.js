import React, {useState} from "react";
import { Route } from "react-router-dom"
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js"
import CharacterList from "./components/CharacterList.js"
import CharacterCard from "./components/CharacterCard.js";
import SearchForm from "./components/SearchForm.js";

export default function App() {
  const [char, setChar] = useState([])
  const addNewChar = person => {
    setChar([...char, person])
  }
  return (
    
    <main>
      
      <Header />
      <CharacterList char={char}/>
      <CharacterCard />
      <SearchForm addNewCharProps={addNewChar}/>
      <Route path="/" component={WelcomePage} />
      <Route path="/character-list" component={CharacterList} />
      
    </main>
  );
}