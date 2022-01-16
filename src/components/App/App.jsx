import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, CssBaseline } from '@mui/material';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';
import Form from '..Form/Form.jsx';

function App() {

  const [galleryList, setGalleryList] = useState([]);
  const [likes, setLikes] = useState(0);


  //On load, get images
  useEffect(() => {
    fetchImages()
  }, [])

  //query server for image objects
  const fetchImages = () => {
    axios.get('/gallery')
      .then(res => {
        //res.data is array of objects
        //setGalleryList updates galleryList state
        setGalleryList(res.data)
      })
      .catch(err => {
        console.log('Error getting gallery:', err);
      })
  }

  const incrementLikes = (id, likes) => {
    console.log('id and likes in app:', id, likes);
    //url to match gallery.router.js
    axios.put(`/gallery/like/${id}`, likes)
      .then(res => {
        //new state, new DOM
        fetchImages();
      })
      .catch(err => {
        console.log('Error in PUT:', err);
      })
  }

    return (
      <>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <Typography variant="h1" className="App-title">Gallery of My Life</Typography>
        </header>
        <GalleryList 
          galleryList={galleryList}
          onClickLike={incrementLikes}
        />
      </div>
      </>
    );
}

export default App;
