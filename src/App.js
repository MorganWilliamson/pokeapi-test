//React Imports
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

//Component Imports
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";
import Pokedex from "./components/Pokedex";

//Style Import
import "./App.css";

function App() {

  const [pokeData, setPokeData] = useState([])
  
  
  useEffect(() => {
        axios.get('URL')
          .then((res) => {
            setPokeData(res.data)
          })
          .catch((error) => {
            console.log(error)
          })
      }, []);

      

  return (
    <div className="App">
    <Switch>
      {/* Rendering for main page */}
      <Route exact path="/" render={(props) => <Pokedex {...props} />} />
      {/* Rendering for individual cards */}
      <Route exact path="/:pokemonId" render={(props) => <Card {...props}/>} />
    </Switch>

      <Header />
        <Card pokeData={pokeData} />
      <Footer />
    </div>
  );
}

export default App;
