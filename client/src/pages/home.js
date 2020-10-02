import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchForm from '../components/Form/SearchForm';
import SliderPage from '../components/Slider';

export const Wrapper = styled.div`
    padding: 5%;
`

const Home = () => {
    const [data, setData] = useState([])
    console.log(data)

    const fetchAll = async () => {
        const res = await fetch('/api/v1/products');
        const data = await res.json()
        await setData(data)
    }

    useEffect(() => {
        fetchAll()
    }, [])
    return (
        <Wrapper>
            <SearchForm />
            <SliderPage />
        </Wrapper>
    )
}

export default Home
