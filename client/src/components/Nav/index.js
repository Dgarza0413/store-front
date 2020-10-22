import React, { useState, useEffect } from 'react'
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

const Navbar = ({setData}) => {
    const [settingFilters, setSettingsFilters] = useState([])

    console.log(settingFilters)
    const { loginWithRedirect } = useAuth0();

    const fetchFilters = async () => {
        const res = await fetch(`/api/v1/products/unique/settings`);
        const data = await res.json();
        await setSettingsFilters(data.profile);
    }

    const handleFilterClick = async (e) => {
        const res = await fetch(`/api/v1/profile/${e}`)
        const data = await res.json();
        await setData(data);
    }

    useEffect(() => {
        fetchFilters();
    }, [])

    return (
        <Nav>
            <h1 style={{ marginLeft: '25px' }}>Rock N Roll It</h1>

            {
                settingFilters && settingFilters.map(e => {
                    return (
                        <div onClick={() => handleFilterClick(e)}>
                            {e}
                        </div>
                    )
                })
            }
            {/* <Link to="/admin">
                Add
            <button style={{ marginRight: '25px', listStyle: 'none' }} onClick={() => loginWithRedirect()}>Signin</button>
            </Link> */}
        </Nav>
    )
}

export default Navbar;