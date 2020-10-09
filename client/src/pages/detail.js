import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ProductForm from '../components/Form/ProductForm';

const Detail = (props) => {
    const [data, setData] = useState()

    const fetchOne = async () => {
        const id = props.match.params.id;
        const res = await fetch(`/api/v1/product/${id}`);
        const data = await res.json();
        await setData(data)
    }

    useEffect(() => {
        fetchOne();
    }, [])

    return (
        <Container>
            <ProductForm setData={setData} data={data} />
        </Container>
    )
}

export default Detail
