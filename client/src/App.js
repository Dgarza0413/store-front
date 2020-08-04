import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';



const App = () => {
  const shopifyApi = () => {
    axios.get('http://localhost:3001/api/products')
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }
  useEffect(() => {
    shopifyApi()
  }, [])
  return (
    <div className="App">
      Console logged data from shopifyApi
    </div>
  );
}

export default App;
