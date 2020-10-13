import React, { useState, Suspense } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './styles.css';

const index = ({ data }) => {
    return (
        <Card
            className="border-0"
            style={{ width: '18rem' }}>
            <Card.Img
                variant="top"
                className="rounded-circle"
                // src={`https://picsum.photos/300/300?random=${Math.floor(Math.random() * 200) + 1}`} 
                src={data.pictureURI || `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 200) + 1}`}
            />
            <Card.Body>
                <Card.Title>
                    {data.flavor}
                </Card.Title>
                <Card.Subtitle
                    className="mb-2 text-muted">
                    {data.brand}
                </Card.Subtitle>
                <Card.Text className="line-clamp">
                    {data.description}
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    )
}

export default index
