import React, { useState, useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { BrowserView, MobileView, isMobile, isBrowser } from "react-device-detect";
import Button from 'react-bootstrap/Button';
import SliderPage from '../components/Slider';
import Navbar from '../components/Nav';
import View from '../components/Mobile/View';
import { Wrapper } from './styles';

const Home = (props) => {
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [increment, setIncrement] = useState(10);

    const handle = useFullScreenHandle();

    const fetchAll = async () => {
        try {
            const res = await fetch(`/api/v1/products`);
            const data = await res.json()
            await setData(data)
            await setFilterData(data)
        } catch (error) {
            console.error(error)
        }
    }

    const loadMore = async () => {
        try {
            const res = await fetch(`/api/v1/products/page/${increment}`);
            const addMore = await res.json()
            await setData([...data, ...addMore]);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (isBrowser) fetchAll();
        if (isMobile) loadMore();
    }, [])

    useEffect(() => {
        loadMore()
    }, [increment])

    return (
        <>
            <FullScreen handle={handle}>
                <Navbar
                    data={data}
                    setData={setData}
                    setFilterData={setFilterData}
                    handle={handle}
                />
                <MobileView>
                    {
                        data && <>
                            <View {...props} setData={setData} data={data} />
                            <div className="text-center">
                                <Button
                                    className="my-4"
                                    onClick={() => setIncrement(increment + 10)}
                                >Load More</Button>
                            </div>
                        </>
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
