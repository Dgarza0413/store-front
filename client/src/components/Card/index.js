import React, { Suspense } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

import './styles.css';
const LazyImage = React.lazy(() => import("./Image"));

const index = ({ data }) => {
    return (
        <Card
            className="border-0"
            // style={{ width: '18rem', margin: 'auto', backgroundColor: 'transparent' }}>
            style={{ margin: 'auto', backgroundColor: 'transparent' }}>
            <Suspense fallback={
                <div
                    style={{
                        // height: '18rem',
                        // width: '18rem',
                        // backgroundColor: 'lightgray',
                        // borderRadius: '50%'
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
        </Card>
    )
}

export default index
