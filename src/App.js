import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './components/header'
import Footer from './components/footer'
import Card from './components/card'


function App() {

  const [pokeData, setPokeData] = useState(null)
  
  
  useEffect(() => {
        axios.get('url')
          .then((res) => {
            setPokeData(res.data)
          })
          .catch((error) => {
            console.log(error)
          })
      }, []);

      

  return (
    <div className="App">
      <header className="App-header">
        <h2>PokeAPI Test</h2>
      </header>
    </div>
  );
}

export default App;
