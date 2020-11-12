import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    height: 5vh;
`

function Footer() {
   // console.log(props);


    return (<StyledFooter>
            <p>Made with data from <a target="blank" href="https://pokeapi.co/">PokéAPI</a>.</p>
            <p>Morgan Williamson, 2020</p>
            <a target="blank" href="https://github.com/MorganWilliamson/pokeapi-test">GitHub</a>
            </StyledFooter>)
}

export default Footer