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
    const [settings, setSettings] = useState([])
    const fetchSettings = async () => {
        const res = await fetch('/api/v1/products/unique/settings')
        const data = await res.json()
        await setSettings(data)
    }

    console.log(settings)
    useEffect(() => {
        fetchSettings();
    }, [])

    return (
        <FormStyle>
            <Form>
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
                                            {/* // <Col sm={3} key={e[0]}> */}
                                            {/* <Form.Label>{e[0]}</Form.Label> */}
                                            <Form.Control className="mt-3" as="select" defaultValue="Brand...">
                                                <option>{e[0]}</option>
                                                {
                                                    e[1] && e[1].map(e => {
                                                        return (
                                                            <option key={e}>{e}</option>
                                                        )
                                                    })
                                                }
                                            </Form.Control>
                                            {/* // </Col> */}
                                        </Form.Group>
                                    )
                                }
                            })
                    }
                    <Form.Group as={Col}>
                        {/* <Col sm={{ span: 10, offset: 2 }}> */}
                        <Form.Label>Search</Form.Label>
                        <Button type="submit">Sign in</Button>
                        {/* </Col> */}
                    </Form.Group>
                </Form.Row>
            </Form>
        </FormStyle>
    )
}

export default SearchForm
