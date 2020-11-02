//React Imports
import React from "react";
import { Route, Switch } from "react-router-dom";

//Component Imports
import Header from "./components/header";
import Footer from "./components/footer";
import PokeCard from "./components/card.jsx";
import Pokedex from "./components/Pokedex.jsx";

//Style Import
import "./App.css";


const App = () => {
  return (
    <div className="App">
      {/* Rendering Header element */}
      <Header />

      <Switch>
        <Route exact path="/" render={(props) => <Pokedex {...props} />} />
        <Route exact path="/:pokemonId" render={(props) => <PokeCard {...props}/>} />
      </Switch>
        
      {/* Rendering Footer element */}
      <Footer />
    </div>
  );
}

export default App;
