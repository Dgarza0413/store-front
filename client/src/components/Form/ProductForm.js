import React from 'react';
import Form from 'react-bootstrap/Form';

const ProductForm = ({ data }) => {
    return (
        <Form>
            {
                data && Object
                    .entries(data)
                    .map(e => {
                        if (e[0] === "description") {
                            return (
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>{e[0]}</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="5"
                                        value={e[1]} />
                                </Form.Group>
                            )
                        } else {
                            return (
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>{e[0]}</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder={`${e[0]}`}
                                        value={e[1]}
                                    />
                                </Form.Group>
                            )
                        }
                    })
            }
        </Form>
    )
}

export default ProductForm
