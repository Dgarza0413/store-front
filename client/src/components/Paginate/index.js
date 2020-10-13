import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';


const Paginate = ({ currentPage, setCurrentPage }) => {
    const [paginateLength, setPaginateLength] = useState();
    const [active, setActive] = useState(1);

    const pages = Math.floor(paginateLength / 10)

    const fetchCollectionLength = async () => {
        const res = await fetch('/api/v1/products/table/length');
        const data = await res.json(res)
        await setPaginateLength(data)
    }

    const handleCurrentPage = (action) => {
        if (currentPage <= pages && currentPage > 0) {
            switch (action) {
                case 'increment':
                    return setCurrentPage(currentPage + 1);
                case 'decrement':
                    return setCurrentPage(currentPage - 1);
                case 'first':
                    return setCurrentPage(1)
                case 'last':
                    return setCurrentPage(pages)
                default:
                    break;
            }
        } else {
            return console.log('error')
        }
    }

    useEffect(() => {
        fetchCollectionLength()
    }, [])

    return (
        <>
            <div className='justify-content-center'>Page {currentPage} of {pages}</div>
            <Pagination className='justify-content-center text-wrap'>
                <Pagination.First disabled={currentPage === 1} onClick={() => handleCurrentPage("first")} />
                <Pagination.Prev disabled={currentPage === 1} onClick={() => handleCurrentPage("decrement")} />
                {/* <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item> */}
                <Pagination.Next disabled={currentPage === pages} onClick={() => handleCurrentPage("increment")} />
                <Pagination.Last disabled={currentPage === pages} onClick={() => handleCurrentPage("last")} />
            </Pagination>
        </>
    )
}

export default Paginate
