import React, { Suspense } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import Badge from '../Badge';

import './styles.css';
const LazyImage = React.lazy(() => import("./Image"));

const index = ({ data }) => {
    return (
        <Card
            className="border-0"
            style={{ width: '16rem', backgroundColor: 'transparent' }}>
            <Suspense fallback={
                <div
                    style={{
                        height: '500px',
                        width: '16rem',
                        backgroundColor: 'lightgray'
                    }}>
                    <Spinner animation="grow" />
                </div>
            }>
                <div className="position-relative">
                    <LazyImage
                        src={data.pictureURI}
                        nicotineStrength={data.nicotineStrength}
                        size={data.size}
                        description={data.description}
                    />
                </div>
            </Suspense>
            <Card.Title>
                {data.flavor}
            </Card.Title>
            {/* <Card.Body>
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
            </Card.Body> */}
        </Card>
    )
}

export default index
