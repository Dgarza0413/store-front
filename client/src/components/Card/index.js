import React, { Suspense } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

import './styles.css';
const LazyImage = React.lazy(() => import("./Image"));

const index = ({ data }) => {
    return (
        <Card
            className="border-0 p-3"
            style={{ margin: 'auto', backgroundColor: 'transparent' }}>
            <Suspense fallback={
                <div>
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
            <div className="card-text-title text-center">
                {data.brand} - {data.flavor}
            </div>
        </Card>
    )
}

export default index
