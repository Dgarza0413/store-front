import React from 'react'
import styled from '@emotion/styled';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export const Nav = styled.nav`
    display: flex;
    position: fixed;
    bottom: 0;
    right:0;
    background-color: cyan; 
`

export default function Navbar() {
    return (
        <Nav>
            <Link to="/slider">Slider view</Link>
            <Link to="/">Catalog View</Link>
        </Nav>
    )
}
