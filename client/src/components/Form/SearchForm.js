import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const FormStyle = styled.div`
    // background: #ebfeff;
    background: #9197AE;
    border-radius: 10px;
    color: #EFF6EE;
    padding: 0px 20px;
    margin-bottom: 20px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    text-align: left;
`


const SearchForm = (props) => {
    const [settings, setSettings] = useState([]);


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await postData(`/api/v1/products/search`, search)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    console.log(settings)

    const fetchSettings = async () => {
        const res = await fetch('/api/v1/products/unique/settings')
        const data = await res.json()
        await setSettings(data.flavors.flat())
    }

    const handleChange = async (e) => {
        const { value } = e.target;
        try {
            await props.setSearch(prev => {
                if (prev.includes(value)) {
                    return prev.filter(e => e !== value)
                } else {
                    return [...prev, value]
                }
            })
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchSettings();
    }, [])

    return (
        <div className="d-flex align-items-center">
            <Form.Group
                className="m-0"
                as={Col}
                controlId="formGridCity"
            >
                <DropdownButton
                    id="dropdown-basic-button"
                    classname="bg-transparent"
                    title={`flavor`}
                >
                    {
                        settings.map(e => {
                            return (
                                <div className="d-flex align-items-center mx-3 my-2">
                                    <input
                                        onClick={handleChange}
                                        type='checkbox'
                                        name={`${e}`}
                                    />
                                    <label className="m-0 pl-2">{e}</label>
                                </div>
                            )
                        })
                    }
                </DropdownButton>
            </Form.Group>
            {/* {
                settings && Object
                    .entries(settings)
                    .map(e => {
                        if (e[0] === '_id' || e[0] === 'profile') {
                            return
                        } else {
                            return (
                                <Form.Group
                                    className="m-0"
                                    key={e[0]}
                                    as={Col}
                                    controlId="formGridCity"
                                >
                                    <DropdownButton
                                        id="dropdown-basic-button"
                                        classname="bg-transparent"
                                        title={`${e[0]}`}
                                    >
                                        {
                                            e[1] && e[1].map(e => {
                                                return (
                                                    <div className="d-flex align-items-center mx-3 my-2">
                                                        <input
                                                            // checked
                                                            onChange={handleChange}
                                                            type='checkbox'
                                                            name={`select-${e}`}
                                                            value={e}
                                                        />
                                                        <label className="m-0 pl-2">{e}</label>
                                                    </div>
                                                )
                                            })
                                        }
                                    </DropdownButton>
                                </Form.Group>
                            )
                        }
                    })
            } */}
        </div>
    )
}

export default SearchForm
