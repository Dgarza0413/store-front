import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slider from "react-slick";
import styled from '@emotion/styled';
import Progress from '../components/Progress';
import Chip from '../components/Chip';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"

export const Image = styled.img`
  width: 500px;
  height: 500px;
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  padding: 5% 0% 10% 5%;
`

const SliderPage = () => {
    const [data, setData] = useState([])
    console.log(data)

    const settings = {
        customPaging: function (i) {
            return (
                <div>
                    {
                        <img style={{
                            width: '30px',
                            height: '30px'
                        }}
                            src={`${data[i].image.src}`}
                        />
                    }
                </div>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        // autoplay: true,
        // autoplaySpeed: 2000,
        lazyLoad: true,
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
        <>
            {/* <Progress/> */}
            <div style={{
                width: '100%',
                boxSizing: 'border-box',
                padding: '0% 3% 0% 0%'
            }}>
                <Slider {...settings}>
                    {data.map((e, i) => {
                        return (
                            <React.Fragment key={i}>
                                <Grid>
                                    <Link
                                        to="/detail"
                                        style={{
                                            alignSelf: 'center'
                                        }}>
                                        <Image
                                            src={e.image.src}
                                            alt={'alt'}
                                        />
                                    </Link>
                                    <div style={{
                                        marginTop: '8%',
                                    }}>
                                        <h1 style={{ fontSize: '46px' }}>{e.title}</h1>
                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                        }}>
                                            {
                                                e.variants.map(e => {
                                                    return (
                                                        <Chip
                                                            price={e.price}
                                                            title={e.title}
                                                            quantity={e.inventory_quantity}
                                                        />
                                                    )
                                                }
                                                )
                                            }
                                        </div>
                                    </div>
                                </Grid>
                            </React.Fragment>
                        )
                    })}
                </Slider>
            </div>
        </>
    );
}

export default SliderPage;