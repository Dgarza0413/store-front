import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import Paginate from '../components/Table/utils/Paginate';

import useFetch from '../hooks/useFetch';

const Admin = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [response, isLoading, error, handleGetFetch] = useFetch();

    useEffect(() => {
        handleGetFetch(`/api/v1/table/page/${currentPage}`);
    }, [])

    useEffect(() => {
        handleGetFetch(`/api/v1/table/page/${currentPage}`);
    }, [currentPage])

    if (isLoading) {
        return <div>loading...</div>
    }

    return (
        <div className="container">
            <Table
                pageId={props.match.params.id}
                data={response}
            />
            <Paginate
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}

export default Admin
