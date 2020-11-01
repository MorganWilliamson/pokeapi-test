//React Imports
import React from "react";
import { Route, Switch } from "react-router-dom";

//Component Imports
import Header from "./components/header";
import Footer from "./components/footer";
import PokeCard from "./components/card";
import Pokedex from "./components/Pokedex";

//Style Import
import "./App.css";


function App() {
  return (
    <div className="App">
      {/* Rendering Header element */}
      <Header />

      <Switch>
        {/* Rendering for main page */}
        <Route exact path="/" render={(props) => <Pokedex {...props} />} />
        {/* Rendering for individual cards */}
        <Route exact path="/:pokemonId" render={(props) => <PokeCard {...props}/>} />
      </Switch>
        
      {/* Rendering Footer element */}
      <Footer />
    </div>
  );
}

export default App;
