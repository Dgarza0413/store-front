import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ProductForm = ({ data, setData }) => {
    console.log(data)

    const handleChange = (e) => {
        const { value, name } = e.target
        setData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handle Submit')

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
                                if (e[0] === "_id" || e[0] === "__v") {
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
                    <Button>Submit</Button>
                </Row>
            </Form>
        </>
    )
}

export default ProductForm
