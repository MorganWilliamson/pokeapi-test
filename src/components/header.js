import React from 'react'
import styled from 'styled-components'
import { Toolbar } from "@material-ui/core";

const StyledHeader = styled.div`
    height: 15vh;
    background: #f00000;
    padding-top: 1%;
`


function Header() {
    

    return (<StyledHeader>
                <h2>Pokédex</h2>
                <Toolbar />
            </StyledHeader>)
}


export default Header