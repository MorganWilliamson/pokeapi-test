import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
    height: 15vh;
    background: #f00000;
    padding-top: 1%;
`


function Header(props) {
    //console.log(props)

    return (<StyledHeader>
                <h2>PokéAPI</h2>
            </StyledHeader>)
}


export default Header