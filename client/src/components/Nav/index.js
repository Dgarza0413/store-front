import React from 'react'
import styled from '@emotion/styled';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export const Nav = styled.nav`
    display: flex;
    background-color: #273043;
    // background-color: #9197AE;
    color: #EFF6EE;
    width: 100%;
`

const Navbar = () => {
    return (
        <Nav>
            <h1 style={{ marginLeft: '25px' }}>Smoke N More</h1>
        </Nav>
    )
}

export default Navbar;