import React, { useEffect, useState, useRef, Suspense } from 'react';
import Slider from "react-slick";
import styled from '@emotion/styled';
import Container from 'react-bootstrap/Container';
import { Image } from 'cloudinary-react';

import Card from '../Card';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"

const LazyCard = React.lazy(() => import('../Card'));

// export const Image = styled.img`
//   width: 500px;
//   height: 500px;
// `

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
`



const SliderPage = () => {
    const [data, setData] = useState([])
    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState();

    const index = useRef()

    const settings = {
        // dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        afterChange: () => setUpdateCount({ updateCount: updateCount + 1 }),
        beforeChange: (current, next) => setSlideIndex({ slideIndex: next }),
        lazyLoad: true,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    const getData = async () => {
        try {
            const res = await fetch('/api/v1/products')
            const data = await res.json()
            await setData(data)

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {/* <Progress/> */}
            <div style={{
                width: '100%',
                boxSizing: 'border-box'
            }}>
                <Slider ref={index} {...settings}>
                    {data.map((e, i) => {
                        return (
                            <React.Fragment key={i}>
                                <Suspense fallback={
                                    <div
                                        style={{
                                            height: '500px',
                                            width: '18rem',
                                            backgroundColor: 'lightgray'
                                        }}></div>
                                }>
                                    <Card data={e} />
                                </Suspense>
                            </React.Fragment>
                        )
                    })}
                </Slider>
            </div>
            {/* <label>item {updateCount} of {data.length}</label> */}
            <input
                style={{ marginTop: '20px', width: '100%' }}
                onChange={e => index.current.slickGoTo(e.target.value)}
                value={undefined || slideIndex.slideIndex || 0}
                type="range"
                min={0}
                max={data.length}
            />
        </>
    );
}

export default SliderPage;
