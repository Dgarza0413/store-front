import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from '@emotion/styled';

export const Image = styled.img`
  width: 300px;
  height: 300px;
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const GridPage = () => {
    const [data, setData] = useState([])

    const shopifyApi = () => {
        axios.get('http://localhost:3001/api/products')
            .then(res => setData(res.data.products))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        shopifyApi()
    }, [])

    return (
        <Grid>
            {data.map((e, i) => {
                return (
                    <React.Fragment key={i}>
                        <Link to="/detail">
                            <Image
                                src={e.image.src}
                                alt={'alt'}
                            />
                        </Link>
                    </React.Fragment>
                )
            })}
        </Grid>
    );
}

export default GridPage;