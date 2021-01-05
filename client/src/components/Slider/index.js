import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import styled from '@emotion/styled';
import Card from '../Card';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"

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
                    slidesPerRow: 2
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
            <div className="slider-box">
                {data.length >= 8
                    ? <Slider className="slider-container" ref={index} {...settings}>
                        {data.map((e, i) => {
                            return (
                                <Card key={e.uuid.toString()} data={e} />
                            )
                        })}
                    </Slider>
                    : <div className="flex-items">
                        {data.map((e, i) => {
                            return (
                                <Card key={e.uuid.toString()} data={e} />
                            )
                        })}
                    </div>
                }
            </div>
        </>
    );
}

export default SliderPage;
