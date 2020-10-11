import React, { useState, useEffect } from 'react';
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
      <Header />
        <Card pokeData={pokeData} />
      <Footer />
    </div>
  );
}

export default App;
