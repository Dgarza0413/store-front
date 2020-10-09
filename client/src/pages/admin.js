import React, { useState, useEffect } from 'react';

import Table from '../components/Table';
import Paginate from '../components/Paginate';

import Button from 'react-bootstrap/Button';

const Admin = () => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    console.log(data)

    const fetchAll = async () => {
        const res = await fetch('/api/v1/products/table');
        const data = await res.json()
        await setData(data)
    }

    const fetchCurrentPage = async () => {
        const res = await fetch(`/api/v1/products/${currentPage}`);
        const data = await res.json()
        await setData(data)
    }

    useEffect(() => {
        fetchAll()
    }, [])

    useEffect(() => {
        fetchCurrentPage()
    }, [currentPage])

    return (
        <>
            <Table data={data} />
            <Paginate
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} />
        </>
    )
}

export default Admin
