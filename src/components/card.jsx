import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Typography, CircularProgress, Button } from "@material-ui/core";
import { toFirstCharUppercase } from "./constants";

const StyledCard = styled.div`
    height: 70vh;
    background: #222224;
`;

const PokeCard = (props) => {
    const { match, history } = props;
    const { params } = match;
    const { pokemonId} = params;
    const [pokemon, setPokemon] = useState(undefined)

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then((res) => {
                setPokemon(res.data)
            })
            .catch((error) => {
                console.log(error);
                setPokemon(false)})
    }, [pokemonId]);

    const generateJSX = (pokemon) => {
        const { name, id, species, height, weight, types, sprites } = pokemon;
        const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        const { front_default } = sprites;

        return (
            <>
                <Typography variant="h1">
                    {`${id}.`}{toFirstCharUppercase(name)}
                    <img src={front_default} alt="front facing sprite of pokemon"/>
                </Typography>
               
                <img src={fullImageUrl} 
                    style={{ width: "300px", height: "300px" }} 
                    alt="full detail front view of pokemon"/>

                <h3>Pokemon Info:</h3>
                {/* might need to add another prop for dual-types */}
                <p>Type: {types}</p>
                <p>Species: {species.name}</p>
                <p>Height: {height}</p>
                <p>Weight: {weight}</p>

            </>
        )
    }

    return (<StyledCard>
                {pokemon === undefined && <CircularProgress />}
                {pokemon !== undefined && generateJSX()}
                {pokemon === false && <p>Pokémon not found.</p>}

                {pokemon !== undefined && (
                    <Button variant="contained" onClick={() => history.push("/")}>
                        Back to Pokédex
                    </Button>
                )}
            </StyledCard>)
}


export default PokeCard;