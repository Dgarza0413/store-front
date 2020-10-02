import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

    const shopifyApi = async () => {
        try {
            const res = await fetch('/api/products');
            const data = await res.json();
            console.log(data)
        } catch (error) {
            console.error(error)
        };
    }

    useEffect(() => {
        shopifyApi()
    }, [])

    return (
        <Grid>
            {/* {data.map((e, i) => {
                return (
                    <React.Fragment key={i}>
                        <Link to="/detail">
                            <Image
                                style={{ margin: 'auto' }}
                                src={e.image.src}
                                alt={'alt'}
                            />
                        </Link>
                    </React.Fragment>
                )
            })} */}
        </Grid>
    );
}

export default GridPage;