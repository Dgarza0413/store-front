import React, { useState, useRef, Suspense } from 'react';
import Slider from "react-slick";
import styled from '@emotion/styled';
import { Image } from 'cloudinary-react';
import Spinner from 'react-bootstrap/Spinner';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"

const LazyCard = React.lazy(() => import('../Card'));

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
`

const SliderPage = ({ data }) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState();

    console.log(data)
    const index = useRef()

    const settings = {
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        afterChange: () => setUpdateCount({ updateCount: updateCount + 1 }),
        beforeChange: (current, next) => setSlideIndex({ slideIndex: next }),
        lazyLoad: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 2,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    rows: 2,

                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    rows: 2,

                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 2,
                }
            }
        ]
    };

    return (
        <>
            <div style={{
                width: '100%',
                boxSizing: 'border-box'
            }}>
                <Slider ref={index} {...settings}>
                    {data.map((e, i) => {
                        return (
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
                                <LazyCard key={e.uuid.toString()} data={e} />
                            </Suspense>
                        )
                    })}
                </Slider>
                <input
                    style={{ marginTop: '20px', width: '100%' }}
                    onChange={e => index.current.slickGoTo(e.target.value)}
                    value={undefined || slideIndex.slideIndex || 0}
                    type="range"
                    min={0}
                    max={data.length}
                />
            </div>
        </>
    );
}

export default SliderPage;
