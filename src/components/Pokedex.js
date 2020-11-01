//React
import React, { useState, useEffect } from "react";
import axios from "axios";
//MUI
import { Grid, Card, CardContent, CardMedia, CircularProgress, TextField, Toolbar, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
//Components
import PokeCard from "./card";
import { toFirstCharUppercase } from "./constants";


export default function Pokedex(props) {
    //Set state
    const [pokeData, setPokeData] = useState({});
    const [filter, setFilter] = useState("");
  
    //Search input function
    const handleSearchChange = (e) => {
        setFilter(e.target.value);
    }

    //API call
    useEffect(() => {
          axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
            .then(function (res) {
                const { data } = res;
                const { results } = data;
                const newPokeData = {};
                results.forEach((pokemon, index) => {
                    newPokeData[index + 1] = {
                        id: index + 1,
                        name: pokemon.name, 
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
                    }
                })
                setPokeData(newPokeData)
            })
        }, []);
    
  
    //Card/Grid generation
    const getPokeCard = (pokemonId) => {
       //Prop destructure
        const { id, name, sprite } = pokeData[pokemonId];

        return (
            <Grid item xs={4} key={pokemonId}>
                <Card onClick={() => History.push(`/${pokemonId}`)}>
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
        <Toolbar>
            <div className="searchContainer">
                <SearchIcon className="searchIcon" />
                <TextField className="searchInput" 
                    label="Pokémon"
                    variant="standard"
                    onChange={handleSearchChange}
                />
            </div>
        </Toolbar>
        <PokeCard pokeData={pokeData} />
        {pokeData ? (
            <Grid>
                {Object.keys(pokeData).map(pokemonId => 
                pokeData[pokemonId].name.includes(filter) &&
                    getPokeCard(pokemonId))}
            </Grid>
        ) : (<CircularProgress /> )}

        </>
    )
}

//Styles

const useStyles = makeStyles((theme) => ({
    pokedexContainer: {
        paddingTop: "20px",
        paddingLeft: "50px",
        paddingRight: "50px",
    },
    cardMedia: {
        margin: "auto",
    }, 
    cardContent: {
        textAlign: "center",
    },
    searchContainer: {
        display: "flex",
        backgroundColor: fade(theme.palette.common.white, 0.15),
        padding: "0px, 20px",
        margin: "5px, 0px",
    },
    searchIcon: {
        alignSelf: "flex-end",
        marginBottom: "5px",
    },
    searchInput: {
        width: "200px",
        margin: "5px",
    },
}));