import React, { useState, useEffect } from 'react';
import ProductForm from '../components/Form/ProductForm';

const Detail = (props) => {
    const [data, setData] = useState()

    console.log(data)

    const fetchOne = async () => {
        const id = props.match.params.id;
        const res = await fetch(`/api/v1/products/${id}`);
        const data = await res.json();
        await setData(data)
    }

    useEffect(() => {
        fetchOne();
    }, [])

    return (
        <ProductForm data={data} />
    )
}

export default Detail
