import React, { useState } from "react";
import mockData from "./mockData";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { toFirstCharUppercase } from "./constants";

const StyledCard = styled.div`
    height: 70vh;
    background: #222224;
`

function PokeCard(props) {
    const { pokemonId } = props;

    const [pokemon, setPokemon] = useState(mockData[`${pokemonId}`])

    const generateJSX = () => {
        const { name, id, species, height, weight, types, sprites } = pokemon;
        const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        const { front_default } = sprites;

        return (
            <Typography variant="h1">
                {`${id}.`}{toFirstCharUppercase(name)}
                <img src={front_default} />
            </Typography>
        )
    }

    return (<StyledCard>
               {generateJSX}
            </StyledCard>)
}


export default PokeCard