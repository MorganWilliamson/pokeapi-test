//React
import React, { useState, useEffect } from "react";
import axios from "axios";
//MUI
import { Grid, Card, CardContent, CardMedia, CircularProgress, TextField, Toolbar, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
//Components
import { toFirstCharUppercase } from "./constants";


//Styles
const useStyles = makeStyles((theme) => ({
    pokedexContainer: {
        paddingTop: "20px",
        paddingLeft: "50px",
        paddingRight: "50px",
        height: "70%",
        background: "#222224",
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
        paddingLeft: "20px",
        paddingRight: "20px",
        marginTop: "5px",
        marginBottom: "5px",
    },
    searchIcon: {
        alignSelf: "flex-end",
        marginBottom: "5px",
    },
    searchInput: {
        width: "200px",
        margin: "5px",
    },
    typography: {
        fontFamily: "sans-serif", 
        padding: "5%",
    }
}));

const Pokedex = (props) => {
    const { history } = props;
    const classes = useStyles();
    //Set state
    const [pokeData, setPokeData] = useState({});
    const [filter, setFilter] = useState("");
  
    //Search input function
    const handleSearchChange = (e) => {
        setFilter(e.target.value);
    }

    //API call
    useEffect(() => {
        // max limit 893
          axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
            .then((res) => {
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
                {/* Put in Card: onClick={() => history.push(`/${id}`)} */}
                <Card >
                    <CardMedia 
                        className={classes.cardMedia}
                        image={sprite}
                        style={{ width: "130px", height: "130px"}}
                    />
                    <CardContent className={classes.cardContent}>
                            <Typography className={classes.typography} >{`${id}.${toFirstCharUppercase(name)}`}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
  
    
    return (
        <>
        <Toolbar>
            <div className={classes.searchContainer}>
                <SearchIcon className={classes.searchIcon} />
                <TextField className={classes.searchInput} 
                    label="Pokémon"
                    variant="standard"
                    onChange={handleSearchChange}
                />
            </div>
        </Toolbar>
        {pokeData ? (
            <Grid container spacing={2} className={classes.pokedexContainer}>
                {Object.keys(pokeData).map(pokemonId => 
                    pokeData[pokemonId].name.includes(filter) &&
                        getPokeCard(pokemonId)
                    )}
            </Grid>
        ) : (<CircularProgress /> )}

        </>
    )
}

export default Pokedex;