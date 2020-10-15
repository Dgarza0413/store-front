import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ProductForm = ({ data, setData }) => {
    console.log(data)
    let history = useHistory();

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
        return response.json(); // parses JSON response into native JavaScript objects
    }

    const handleChange = (e) => {
        const { value, name } = e.target
        setData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await postData(`/api/v1/product/${data.uuid}`, {
                ...data,
                // size: data.size.split(",") || [],
                // nicotineStrength: data.nicotineStrength.split(",") || []
            })
        } catch (error) {
            console.error(error)
        } finally {
            history.push('/admin')
        }
    }

    return (
        <>
            <h1>Product Form</h1>
            <Link to={'/admin'}>
                <Button>Go back</Button>
            </Link>
            <Form onSubmit={handleSubmit}>
                <Row>
                    {
                        data && Object
                            .entries(data)
                            .map(e => {
                                if (
                                    e[0] === "_id" ||
                                    e[0] === "__v" ||
                                    e[0] === "flavorKeywords"
                                ) {
                                    return
                                } else if (e[0] === "description") {
                                    return (
                                        <Col sm={12}>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>{e[0]}</Form.Label>
                                                <Form.Control
                                                    name={e[0]}
                                                    value={e[1]}
                                                    onChange={handleChange}
                                                    as="textarea"
                                                    rows="5"
                                                />
                                            </Form.Group>
                                        </Col>
                                    )
                                } else if (e[0] === "uuid") {
                                    return (
                                        <Col sm={12}>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>{e[0]}</Form.Label>
                                                <Form.Control
                                                    readOnly
                                                    name={e[0]}
                                                    value={e[1]}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                    )
                                } else {
                                    return (
                                        <Col sm={6} md={4}>
                                            <Form.Group>
                                                <Form.Label>{e[0]}</Form.Label>
                                                <Form.Control
                                                    name={e[0]}
                                                    value={e[1]}
                                                    onChange={handleChange}
                                                    placeholder={`${e[0]}`}
                                                />
                                            </Form.Group>
                                        </Col>
                                    )
                                }
                            })
                    }
                </Row>
                <Row>
                    <Col>
                        <Button type='submit'>Submit</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default ProductForm
