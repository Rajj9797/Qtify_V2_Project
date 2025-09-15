import React, { useEffect, useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import { fetchFilters, fetchNewAlbums, fetchSongs, fetchTopAlbums } from './Component/api';
import './App.css';
import Hero from './Component/Hero';
import Navbar from './Component/Navbar';

function App() {
  const [data, setData] = useState({});

  const loadData = (key, source) => {
    source().then((fetchedData) => {
      setData((prevData) => ({
        ...prevData,
        [key]: fetchedData,
      }));
    });
  }

  useEffect(() => {
    loadData('newAlbums', fetchNewAlbums);
    loadData('topAlums', fetchTopAlbums);
    loadData('songs', fetchSongs);
    loadData('genres', fetchFilters);
  }, []); 

  const { newAlbums = [], topAlums = [], songs = [], genres = [] } = data;
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Navbar searchData={[...newAlbums, ...topAlums, ...songs]} />
        <Outlet context={{ data: { newAlbums, topAlums, songs, genres } }} />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
