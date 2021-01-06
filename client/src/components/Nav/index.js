import React, { useState, useEffect } from 'react'
// import { useAuth0 } from '@auth0/auth0-react';
import { MobileView, BrowserView } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons'

// import { FullScreen, useFullScreenHandle } from "react-full-screen";


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';

import './styles.css';

const NavbarComp = ({ setData, handle }) => {
    const [settingFilters, setSettingsFilters] = useState([])

    console.log(handle)

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

    const fetchAll = async () => {
        const res = await fetch('/api/v1/products');
        const data = await res.json()
        await setData(data)
    }

    const handleSelect = async (e) => {
        console.log(e)
    }


    useEffect(() => {
        fetchFilters();
    }, [])

    return (
        <Navbar
            collapseOnSelect
            expand="md"
            bg="dark"
            variant="dark"
        >
            <Navbar.Brand>Rock N Roll It</Navbar.Brand>
            <div className="middle">
                <BrowserView>
                    <FontAwesomeIcon
                        onClick={handle.active ? handle.exit : handle.enter}
                        color="white"
                        icon={handle.active ? faCompress : faExpand}
                        size="2x"
                    />
                </BrowserView>
            </div>
            <BrowserView>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav
                        onSelect={handleSelect}
                        variant="pills"
                        className="ml-auto d-flex justify-content-end"
                    >
                        <Nav.Link
                            eventKey={`link-${0}`}
                            // key={e.toString()}
                            className={'mr-4'}
                            onClick={() => fetchAll()}
                        >
                            All
                    </Nav.Link>
                        {
                            settingFilters.map((e, i) => {
                                return (
                                    <Nav.Item variant="light" className="">
                                        <Nav.Link
                                            eventKey={`link-${i + 1}`}
                                            key={e.toString()}
                                            className={'mr-4'}
                                            onClick={() => handleFilterClick(e)}
                                        >
                                            {e}
                                        </Nav.Link>
                                    </Nav.Item>
                                )
                            })}
                    </Nav>
                </Navbar.Collapse>
            </BrowserView>
        </Navbar>
        // <Nav>
        // { settingFilters && <Dropdown settingFilters={settingFilters} setData={setData} />} */}
        //     <Link to="/admin">
        //         Add
        //     <button style={{ marginRight: '25px', listStyle: 'none' }} onClick={() => loginWithRedirect()}>Signin</button>
        //     </Link> 
        // </Nav> 
    )
}

export default NavbarComp;