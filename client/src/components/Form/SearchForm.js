import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const Form = styled.form`
    // background: #ebfeff;
    background: #9197AE;
    border-radius: 10px;
    color: #EFF6EE;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    text-align: left;
`


const SearchForm = () => {
    const [settings, setSettings] = useState([])
    const fetchSettings = async () => {
        const res = await fetch('/api/v1/products/unique/settings')
        const data = await res.json()
        await setSettings(data)
    }

    useEffect(() => {
        fetchSettings();
    }, [])

    return (
        <Form>

        </Form>
    )
}

export default SearchForm
