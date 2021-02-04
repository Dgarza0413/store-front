import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';


const Paginate = ({ currentPage, setCurrentPage }) => {
    const [paginateLength, setPaginateLength] = useState();
    const [range, setRange] = useState([]);
    // const [active, setActive] = useState(1);

    const history = useHistory();

    const pages = Math.floor(paginateLength / 10)

    const fetchCollectionLength = async () => {
        const res = await fetch('/api/v1/table/length');
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

    // const createRange = () => {
    //     const increment = [...new Array(currentPage)];
    //     if (currentPage <= 3) {
    //         setRange([...new Array(3)]);
    //     } else if (currentPage > 3 && currentPage < pages) {
    //         setRange([...new Array(currentPage)]);
    //     }
    // }

    useEffect(() => {
        fetchCollectionLength()
    }, [])

    useEffect(() => {
        history.push(`/admin/page/${currentPage}`)
    }, [currentPage])

    return (
        <>
            <div className='justify-content-center'>Page {currentPage} of {pages}</div>
            <Pagination className='justify-content-center text-wrap'>
                <Pagination.First disabled={currentPage === 1} onClick={() => handleCurrentPage("first")} />
                <Pagination.Prev disabled={currentPage === 1} onClick={() => handleCurrentPage("decrement")} />
                {range.map((e, i) => {
                    return (
                        <Pagination.Item>{i + 1}</Pagination.Item>
                    )
                })}

                <Pagination.Next disabled={currentPage === pages} onClick={() => handleCurrentPage("increment")} />
                <Pagination.Last disabled={currentPage === pages} onClick={() => handleCurrentPage("last")} />
            </Pagination>
        </>
    )
}

export default Paginate
