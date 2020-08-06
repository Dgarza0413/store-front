import React from 'react'
import styled from '@emotion/styled';
import { Link } from 'react-router';

export const Nav = styled.nav`
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: cyan; 
`

export default function Navbar() {
    return (
        <Nav>

            This is a navbar
        </Nav>
    )
}
