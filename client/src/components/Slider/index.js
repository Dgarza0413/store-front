import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import styled from '@emotion/styled';
import { Image } from 'cloudinary-react';
import { FaIceCream, FaAppleAlt } from 'react-icons/fa';
import { RiPlantFill } from 'react-icons/ri';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"

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

    const [options, setOptions] = useState(
        [
            { flavor: 'cream', icon: 'FaIceCream' },
            { flavor: 'tobacco', icon: 'RiPlantFill' },
            { flavor: 'fruity', icon: 'FaAppleAlt' }
        ]
    )

    const index = useRef()

    const settings = {
        // dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        afterChange: () => setUpdateCount({ updateCount: updateCount + 1 }),
        beforeChange: (current, next) => setSlideIndex({ slideIndex: next }),
        lazyLoad: true,
        slidesToShow: 1,
        slidesToScroll: 1
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
                boxSizing: 'border-box',
                padding: '0% 3% 0% 0%'
            }}>
                <Slider ref={index} {...settings}>
                    {data.map((e, i) => {
                        return (
                            <React.Fragment key={i}>
                                <Grid>
                                    {
                                        e.pictureURI
                                            ? <img src={e.pictureURI} />
                                            : <img src={`https://picsum.photos/500/500?random=${Math.floor(Math.random() * 200) + 1}`} />
                                    }
                                    <div style={{
                                        marginTop: '8%',
                                    }}>

                                        <h1>{e.flavor}</h1>
                                        <h2>{e.brand}</h2>
                                        <div>
                                            <div>
                                                flavors
                                                </div>
                                            {e.nicotineStrength.map(e => {
                                                return (
                                                    <>
                                                        <label>{e}</label>
                                                        <input type="radio" name="nicotineStrength" value={e} />
                                                    </>
                                                )
                                            })}
                                        </div>
                                        <div>
                                            {
                                                options.map(e => {
                                                    if (e.icon === 'FaIceCream') {
                                                        return (
                                                            <FaIceCream size="30px" />
                                                        )
                                                    } else if (e.icon === "RiPlantFill") {
                                                        return (
                                                            <RiPlantFill size="30px" />
                                                        )
                                                    } else if (e.icon === "FaAppleAlt") {
                                                        return (
                                                            <FaAppleAlt size="30px" />
                                                        )
                                                    } else
                                                        return (
                                                            <div>{e}</div>
                                                        )
                                                })
                                            }
                                        </div>
                                        <div>
                                            <div>Size</div>
                                            {e.size.map((e, i) => {
                                                return (
                                                    <React.Fragment key={i}>
                                                        <label>{e}</label>
                                                        <input type="radio" name="size" value={e} />
                                                    </React.Fragment>
                                                )
                                            })}
                                        </div>
                                        <p>{e.description}</p>
                                    </div>
                                </Grid>
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
