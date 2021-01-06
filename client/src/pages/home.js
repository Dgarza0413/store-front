import React, { useState, useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import styled from 'styled-components';
import SearchForm from '../components/Form/SearchForm';
import SliderPage from '../components/Slider';
import Navbar from '../components/Nav';
import View from '../components/Mobile/View';
import Icon from '../rock-n-roll-it-icon.png'

import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

export const Wrapper = styled.div`
    // margin: 5% 0%;
    height: calc(100% - 56px);
    // padding: 1% 3% 0% 0%;    
    display: flex;
    align-items: center;
    align-content: center;
    background-image: url(${Icon});
    background-size: contain;
    background-position: center;
    // background-repeat: no-repeat;
`

const Home = (props) => {
    const [data, setData] = useState([])

    console.log(setData)
    console.log(data)

    const fetchAll = async () => {
        const res = await fetch('/api/v1/products');
        const data = await res.json()
        await setData(data)
    }

    const handle = useFullScreenHandle();

    useEffect(() => {
        fetchAll()
    }, [])

    return (
        <>
            <FullScreen handle={handle}>
                <Navbar handle={handle} setData={setData} />
                {/* <SearchForm /> */}
                <MobileView>
                    <View {...props} setData={setData} data={data} />
                </MobileView>
                <BrowserView>
                    <Wrapper>
                        {
                            data && <SliderPage data={data} />
                        }
                    </Wrapper>
                </BrowserView>
            </FullScreen>
        </>
    )
}

export default Home
