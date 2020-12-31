import React, { useState, useRef, Suspense } from 'react';
import Slider from "react-slick";
import styled from '@emotion/styled';
import { Image } from 'cloudinary-react';
import Spinner from 'react-bootstrap/Spinner';
import Card from '../Card';

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

    const index = useRef()

    const settings = {
        afterChange: () => setUpdateCount({ updateCount: updateCount + 1 }),
        beforeChange: (current, next) => setSlideIndex({ slideIndex: next }),
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        slidesPerRow: 2,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {

                    slidesToShow: 3,
                    slidesToScroll: 3,
                    // infinite: true,
                    slidesPerRow: 2
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    // initialSlide: 2,
                    slidesPerRow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    className: 'center',
                    vertical: true,
                    verticalSwiping: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    slidesPerRow: 1,
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
                <Slider style={{ margin: '3% 3% 0% 0%' }} ref={index} {...settings}>
                    {data.map((e, i) => {
                        return (
                            <Card key={e.uuid.toString()} data={e} />
                        )
                    })}
                </Slider>
                {/* <input
                    // style={{ marginTop: '20px', width: '100%' }}
                    onChange={e => index.current.slickGoTo(e.target.value)}
                    value={undefined || slideIndex.slideIndex || 0}
                    type="range"
                    min={0}
                    max={data.length}
                /> */}
            </div>
        </>
    );
}

export default SliderPage;
