import React from 'react'
import styled from '@emotion/styled';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export const Nav = styled.nav`
    display: flex;
    width: 100%;
`

export default function Navbar() {
    return (
        <Nav>
            <h1 style={{ marginLeft: '25px' }}>Smoke N More</h1>
            {/* <Link to="/slider">Slider view</Link>
            <Link to="/">Catalog View</Link> */}
        </Nav>
    )
}
