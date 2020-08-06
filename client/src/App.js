import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import Navbar from './components/Nav';
import './App.css';

export const Image = styled.img`
  width: 300px;
  height: 300px;
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

const App = () => {
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
    <div className="App">
      <Navbar />
      <Grid>
        {data.map((e, i) => {
          return <React.Fragment key={i}>
            <Image
              src={e.image.src}
              alt={'alt'}
            />
          </React.Fragment>
        })}
      </Grid>
    </div>
  );
}

export default App;
