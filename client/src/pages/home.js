import React, { useState, useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import styled from 'styled-components';
import SliderPage from '../components/Slider';
import Navbar from '../components/Nav';
import View from '../components/Mobile/View';
import Icon from '../rock-n-roll-it-icon.png';
// import Icon from '../rock-n-roll-it-icon-dark.png';

import {
    BrowserView,
    MobileView,
} from "react-device-detect";

export const Wrapper = styled.div`
    height: calc(100% - 56px);
    display: flex;
    align-items: center;
    align-content: center;
    background-image: url(${Icon});
    background-size: contain;
    background-position: center;
`

const Home = (props) => {
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [search, setSearch] = useState([]);

    const handle = useFullScreenHandle();

    console.log(data)
    console.log(search)
    console.log(filterData)

    const fetchAll = async () => {
        const res = await fetch('/api/v1/products');
        const data = await res.json()
        await setData(data)
        await setFilterData(data)
    }


    useEffect(() => {
        fetchAll()
    }, [])

    return (
        <>
            <FullScreen handle={handle}>
                <Navbar
                    handle={handle}
                    search={search}
                    setSearch={setSearch}
                    setFilterData={setFilterData}
                    data={data}
                    setData={setData}
                />
                <MobileView>
                    {
                        data && <View
                            {...props}
                            setData={setData}
                            data={data}
                        />
                    }
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
