import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slider from "react-slick";
import styled from '@emotion/styled';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Image = styled.img`
  width: 300px;
  height: 300px;
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const SliderPage = () => {
    const [data, setData] = useState([])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const shopifyApi = () => {
        axios.get('http://localhost:3001/api/products')
            .then(res => setData(res.data.products))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        shopifyApi()
    }, [])

    return (
        <Slider {...settings}>
            {data.map((e, i) => {
                return (
                    <React.Fragment key={i}>
                        <Link to="/detail">
                            <Image
                                src={e.image.src}
                                alt={'alt'}
                            />
                        </Link>
                    </React.Fragment>
                )
            })}
        </Slider>
    );
}

export default SliderPage;