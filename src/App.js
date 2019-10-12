
import React, { useState } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList"
import SearchForm from "./components/SearchForm";

export default function App() {
  const [name, setName] = useState("");

  const searchFunc = (event, search) => {
    event.preventDefault();
    setName(search.name);
  };

  return (
    <main>
      <Header />
      <SearchForm onSearch={searchFunc} />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} component={() => <CharacterList name={name} />}
      />
    </main>
  );
}



// export default function App() {
//   return (
//     <main>
//       <Header />
//       <SearchForm />
//       <Route exact path="/" component={WelcomePage} />
//       <CharacterList />
//     </main>
//   );
// }
