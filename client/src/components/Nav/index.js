import React, { useState, useEffect } from 'react'
// import { useAuth0 } from '@auth0/auth0-react';
import { MobileView, BrowserView } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress, faFilter } from '@fortawesome/free-solid-svg-icons';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import SearchForm from '../Form/SearchForm';

// import { FullScreen, useFullScreenHandle } from "react-full-screen";


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';

import './styles.css';

const NavbarComp = ({ data, setData, handle, search, setSearch, setFilterData }) => {
    const [settingFilters, setSettingsFilters] = useState([])
    const [settings, setSettings] = useState([]);

    const fetchFilters = async () => {
        const res = await fetch(`/api/v1/products/unique/settings`);
        const data = await res.json();
        await setSettingsFilters(data.profile);
        await setSettings(data.flavors.flat());
        await setSearch([])
    }

    const handleFilterClick = async (e) => {
        const res = await fetch(`/api/v1/profile/${e}`)
        const data = await res.json();
        await setData(data);
        await setFilterData(data);
        await setSearch([])

    }

    const fetchAll = async () => {
        const res = await fetch('/api/v1/products');
        const data = await res.json()
        await setData(data)
        await setFilterData(data);
        await setSearch([])

    }

    const handleFilterFlavorClick = (e) => {
        const { value } = e.target
        setSearch(prev => {
            if (prev.includes(value)) {
                return prev.filter(e => e !== value)
            } else {
                return [...prev, value]
            }
        })
    }

    const handleFilterValue = () => {
        if (search.length > 0) {
            const filterValue = search.map(v => {
                return (
                    data.filter(e => {
                        const combine = e['flavorKeywords'].join(" ") || []
                        return (
                            combine.includes(v)
                        )
                    })
                )
            })
            setFilterData(filterValue.flat())
        } else {
            return
        }
    }

    useEffect(() => {
        fetchFilters();
    }, [])

    useEffect(() => {
        handleFilterValue()
    }, [search])

    return (
        <Navbar
            collapseOnSelect
            expand="md"
            bg="dark"
            variant="dark"
            className="d-flex justify-content-between"
        >
            <div className="d-flex middle">
                <Navbar.Brand>Rock N Roll It</Navbar.Brand>
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
                    {/* {show
                        ? <SearchForm setSearch={setSearch} />
                        : ""
                    }
                    <FontAwesomeIcon
                        onClick={handleFormHide}
                        className="mr-3"
                        icon={faFilter}
                        color="white"
                    /> */}
                    <Nav
                        // onSelect={handleSelect}
                        variant="pills"
                        className="ml-auto d-flex justify-content-end"
                    >
                        <Nav.Link
                            eventKey={`link-${0}`}
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
                        <DropdownButton
                            id="dropdown-basic-button"
                            style={{ backgroundColor: 'none' }}
                            title={`flavor`}
                            drop={'left'}
                            menuAlign={{ lg: 'left' }}
                        >
                            {
                                settings.map(e => {
                                    return (
                                        <div className="d-flex align-items-center mx-3 my-2">
                                            <input
                                                checked={search.includes(e)}
                                                onClick={handleFilterFlavorClick}
                                                type='checkbox'
                                                value={e}
                                                name={e}
                                            />
                                            <label className="m-0 pl-2">{e}</label>
                                        </div>
                                    )
                                })
                            }
                        </DropdownButton>
                    </Nav>
                </Navbar.Collapse>
            </BrowserView>
        </Navbar>
    )
}

export default NavbarComp;