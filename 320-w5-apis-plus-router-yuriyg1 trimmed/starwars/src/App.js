import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import DetailPage from './DetailPage';
import NotFoundPage from './NotFoundPage';
import Navbar from './NavBar';
// import loadingGif from './media/loadingLightBG.gif'

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  if (!data) {
    return (
      <div className='loading'>
        <img src="https://i.gifer.com/7WDQ.gif" alt="Loading..." />
        <div>Loading...</div>
      </div>
      )
  }

  return (

    <BrowserRouter>
      <div>

        <Navbar/>

        <Routes>
          <Route path="/" element={<HomePage data={data}/>} />
          <Route path="/detail" element={<DetailPage data={data}/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

}

export default App;