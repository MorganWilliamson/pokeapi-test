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
                <Toolbar />
                <h2>PokéAPI</h2>
            </StyledHeader>)
}


export default Header