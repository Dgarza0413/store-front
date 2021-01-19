import React, { useState, useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import SliderPage from '../components/Slider';
import Navbar from '../components/Nav';
import View from '../components/Mobile/View';
import { Wrapper } from './styles';

import {
    BrowserView,
    MobileView,
} from "react-device-detect";

const Home = (props) => {
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [search, setSearch] = useState([]);

    console.log(search)
    console.log(filterData)

    const handle = useFullScreenHandle();

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
                        data && <View {...props} setData={setData} data={data} />
                    }
                </MobileView>
                <BrowserView>
                    <Wrapper>
                        {
                            data && <SliderPage data={filterData} />
                        }
                    </Wrapper>
                </BrowserView>
            </FullScreen>
        </>
    )
}

export default Home
