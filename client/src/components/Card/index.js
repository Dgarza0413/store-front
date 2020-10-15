import React, { useState, Suspense } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import Image from './Image';

import './styles.css';
const LazyImage = React.lazy(() => import("./Image"));

const index = ({ data }) => {
    return (
        <Card
            className="border-0"
            style={{ width: '18rem' }}>
            <Suspense fallback={
                <div
                    style={{
                        height: '500px',
                        width: '18rem',
                        backgroundColor: 'lightgray'
                    }}>
                    <Spinner animation="grow" />
                </div>
            }>
                <LazyImage src={data.pictureURI} />
            </Suspense>
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
            </Card.Body>
        </Card>
    )
}

export default index
