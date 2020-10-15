import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Form from 'react-bootstrap/Form';
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


const SearchForm = () => {
    const [settings, setSettings] = useState([]);
    const [search, setSearch] = useState({ brand: '', type: '', profile: '' });
    const [searchData, setSearchData] = useState([]);

    console.log(searchData)

    const fetchSettings = async () => {
        const res = await fetch('/api/v1/products/unique/settings')
        const data = await res.json()
        await setSettings(data)
    }

    const postData = async (url, data) => {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        const dataRes = await response.json(); // parses JSON response into native JavaScript objects
        await setSearchData(dataRes);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await postData(`/api/v1/products/search`, search)
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = async (e) => {
        const { name, value } = e.target;
        try {
            await setSearch(prev => {
                return {
                    ...prev,
                    [name]: value
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
        <FormStyle>
            <Form onSubmit={handleSubmit}>
                <Form.Row>
                    {
                        settings && Object
                            .entries(settings)
                            .map(e => {
                                if (e[0] === '_id') {
                                    return
                                } else {
                                    return (
                                        <Form.Group key={e[0]} as={Col} controlId="formGridCity">
                                            <Form.Control className="mt-3" as="select" defaultValue="Brand..." name={e[0]} onChange={handleChange}>
                                                <option>{e[0]}</option>
                                                {
                                                    e[1] && e[1].map(e => {
                                                        return (
                                                            <option key={e}>{e}</option>
                                                        )
                                                    })
                                                }
                                            </Form.Control>
                                        </Form.Group>
                                    )
                                }
                            })
                    }
                    <Col sm="auto">
                        <Button className="mt-3" type="submit">Search</Button>
                    </Col>
                </Form.Row>
            </Form>
        </FormStyle>
    )
}

export default SearchForm
