import React, { useState, useEffect } from 'react'
import { BrowserView } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../Button/Browser/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import useFetch from "../../hooks/useFetch";
import './styles.css';

// search, searchType,
// setSearch, setSearchType 
const NavbarComp = ({ data, setData, handle, setFilterData }) => {
    const [show, setShow] = useState(false);
    const [showType, setShowType] = useState(false);
    const [search, setSearch] = useState([]);
    const [searchType, setSearchType] = useState("");

    const [response, isLoading, error, handleGetFetch, handlePostFetch, handleManyGetFetch] = useFetch();

    const handleFilterClick = async (e) => {
        await handleGetFetch(`/api/v1/products/unique/settings/${e}`)
        const res = await fetch(`/api/v1/profile/${e}`)
        const data = await res.json();
        await setData(data);
        await setFilterData(data);
        await setSearch([])
        await setSearchType("")
    }

    const fetchAll = async () => {
        await handleGetFetch(`/api/v1/products/unique/settings`);
        const res = await fetch('/api/v1/products');
        const data = await res.json()
        await setData(data)
        await setFilterData(data);
        await setSearch([])
        await setSearchType("")
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

    const handleFilterTypeCheck = (e) => {
        const { value } = e.target
        if (searchType === value) {
            setSearchType("")
        } else {
            setSearchType(value)
        }
    }

    const handleFilterValue = () => {
        if (search.length <= 0) {
            const filtertype = data.filter(v => {
                return (
                    v["type"].match(searchType)
                )
            })
            setFilterData(filtertype)
        } else if (search.length > 0) {
            const filterValue = search.map(v => {
                return (
                    data.filter(e => {
                        const combine = e['flavorKeywords'].join(" ") || [];
                        return (
                            combine.includes(v) && e["type"].match(searchType)
                        )
                    })
                )
            })
            setFilterData(filterValue.flat())
        } else {
            setFilterData(data)
        }
    }

    useEffect(() => {
        handleGetFetch('/api/v1/products/unique/settings')
    }, [])

    useEffect(() => {
        handleFilterValue()
    }, [search, searchType])

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
                    <Nav
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
                            response?.profiles?.map((e, i) => {
                                return (
                                    <Nav.Item key={e.toString()} variant="light">
                                        <Nav.Link
                                            eventKey={`link-${i + 1}`}
                                            className={'mr-4'}
                                            onClick={() => handleFilterClick(e)}
                                        >
                                            {e}
                                        </Nav.Link>
                                    </Nav.Item>
                                )
                            })
                        }

                        {
                            response && <>
                                <Dropdown
                                    title={"Flavor"}
                                    data={response?.flavors}
                                    search={search}
                                    show={show}
                                    setShow={setShow}
                                    handleFilterFlavorClick={handleFilterFlavorClick}
                                />
                                <Dropdown
                                    title={"Type"}
                                    data={response?.type}
                                    searchType={searchType}
                                    show={showType}
                                    setShow={setShowType}
                                    handleFilterTypeCheck={handleFilterTypeCheck}
                                />
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </BrowserView>
        </Navbar >
    )
}

export default NavbarComp;