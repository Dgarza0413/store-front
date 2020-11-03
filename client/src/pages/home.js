import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchForm from '../components/Form/SearchForm';
import SliderPage from '../components/Slider';
import Navbar from '../components/Nav';
import Icon from '../rock-n-roll-it-icon.png'

export const Wrapper = styled.div`
    padding: 5%;
    height: 94vh;
    display: flex;
    align-items: center;
    align-content: center;
    background-image: url(${Icon});
    background-position: center;
    background-repeat: no-repeat;
`

const Home = () => {
    const [data, setData] = useState([])

    const fetchAll = async () => {
        const res = await fetch('/api/v1/products');
        const data = await res.json()
        await setData(data)
    }

    useEffect(() => {
        fetchAll()
    }, [])

    return (
        <>
            <Navbar setData={setData} />
            <Wrapper>
                {
                    data && <SliderPage data={data} />
                }
            </Wrapper>
        </>
    )
}

export default Home
