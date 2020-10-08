import React, { useState, useEffect } from 'react';

import Table from '../components/Table';
import Paginate from '../components/Paginate';

const Admin = () => {
    const [data, setData] = useState([])

    const fetchAll = async () => {
        const res = await fetch('/api/v1/products/table');
        const data = await res.json()
        await setData(data)
    }
    console.log(data)

    useEffect(() => {
        fetchAll()
    }, [])

    return (
        <>
            <Table data={data} />
            {/* <Paginate /> */}
        </>
    )
}

export default Admin
