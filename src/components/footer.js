import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    height: 5vh;
`

function Footer() {
   // console.log(props);


    return (<StyledFooter>
            <p>Made with data from https://pokeapi.co/ </p>
            <p>Morgan Williamson, 2020</p>
            </StyledFooter>)
}

export default Footer