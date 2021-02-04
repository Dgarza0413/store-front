import React, { Suspense } from 'react';
import { isMobile } from 'react-device-detect';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

import './styles.css';
const LazyImage = React.lazy(() => import("./Image"));

const index = ({ data, stylename }) => {
    return (
        <Card
            className={`border-0 p-1 ${stylename}`}
            style={{ margin: 'auto', backgroundColor: 'transparent' }}>
            <Suspense fallback={
                <div className='d-flex justify-content-center align-items-center'>
                    <Spinner animation="grow" size="lg" />
                </div>
            }>
                <div className="position-relative margin-auto">
                    <LazyImage
                        src={data.pictureURI}
                        nicotineStrength={data.nicotineStrength}
                        size={data.size}
                        description={data.description}
                        brand={data.brand}
                        flavor={data.flavor}
                    />
                </div>
            </Suspense >
            <div className={`card-body p-1 ${isMobile ? "" : "margin-auto text-center "}`}>
                <h6 className="card-title">{data.brand}</h6>
                <p className="card-text">{data.flavor}</p>
            </div>
        </Card >
    )
}

export default index
