import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, CardContent, CardMedia, Typography, CircularProgress } from "@material-ui/core";
//Components
import PokeCard from "./card";
import { toFirstCharUppercase } from "./constants";
//Mock data
import mockData from "./mockData";


export default function Pokedex(props) {
    const { history } = props;
    //Set state
    const [pokeData, setPokeData] = useState(mockData)
  
    //API call
    useEffect(() => {
          axios.get(`URL`)
            .then((res) => {
              setPokeData(res.data)
            })
            .catch((error) => {
              console.log(error)
            })
        }, []);
    
  
    //Card/Grid generation
    const getPokeCard = (pokemonId) => {
       //Prop destructure
        const { id, name } = pokeData[`${pokemonId}`];
        const { sprite } = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

        return (
            <Grid item xs={4} key={pokemonId}>
                <Card onClick={() => history.push(`/${pokemonId}`)}>
                    <CardMedia 
                        className="cardMedia"
                        image={sprite}
                        style={{ width: "130px", height: "130px"}}
                    />
                    <CardContent className="cardContent">
                        <Typography>{`${id}.${toFirstCharUppercase(name)}`}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
  
    
    return (
        <>
        <PokeCard pokeData={pokeData} />
        {pokeData ? (
            <Grid>
                {Object.keys(pokeData).map(pokemonId => 
                    getPokeCard(pokemonId))}
            </Grid>
        ) : (<CircularProgress /> )}

        </>
    )
}