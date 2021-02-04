import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ProductForm from '../components/Form/ProductForm';

import Error from '../components/UI/Error';
import useFetch from '../hooks/useFetch';

const Detail = (props) => {
    const [data, setData] = useState()
    const [response, isLoading, error, handleGetFetch] = useFetch();

    useEffect(() => {
        handleGetFetch(`/api/v1/product/${props.match.params.id}`)
    }, [])

    if (isLoading) {
        return <div>...loading</div>
    }

    return (
        <Container>
            <ProductForm
                setData={setData}
                data={response}
            />
        </Container>
    )
}

export default Detail
