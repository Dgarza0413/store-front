import React from 'react'

import Body from './Body';
import Header from './Header';
import Table from 'react-bootstrap/Table';

const index = ({ data }) => {
    return (
        <Table responsive striped bordered hover size="sm">
            {
                data && <>
                    <Header data={data[0]} />
                    <Body data={data} />
                </>
            }
        </Table>
    )
}

export default index
