import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
    height: 70vh;
    background: #222224;
`

function Card(props) {
    //console.log(props)

    return (<StyledCard>
                <div>
                    <p>Name: {props.pokeData.name}</p>
                    <p>Pokédex #: {props.pokeData.id}</p>
                </div>
            </StyledCard>)
}


export default Card