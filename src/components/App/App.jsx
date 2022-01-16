import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';

function App() {

  const [galleryList, setGalleryList] = useState([]);

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

  const incrementLikes = (id) => {
    //url to match gallery.router.js
    axios.put(`/gallery/like/${id}`)
      .then(res => {
        //new state, new DOM
        fetchImages();
      })
      .catch(err => {
        console.log('Error in PUT:', err);
      })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList 
          galleryList={galleryList}
          onClickLike={incrementLikes}
        />
      </div>
    );
}

export default App;
