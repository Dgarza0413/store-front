import React from 'react'
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #273043;
    // background-color: #9197AE;
    color: #EFF6EE;
    width: 100%;
`

const Navbar = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Nav>
            <h1 style={{ marginLeft: '25px' }}>Rock N Roll It</h1>
            {/* <Link to="/admin"> */}
            {/* Add */}
            {/* <button style={{ marginRight: '25px', listStyle: 'none' }} onClick={() => loginWithRedirect()}>Signin</button> */}
            {/* </Link> */}
        </Nav>
    )
}

export default Navbar;