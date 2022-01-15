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
        //alert('error getting guests');
        console.log('Error getting gallery:', err);
      })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList 
          galleryList={galleryList}
        />
      </div>
    );
}

export default App;
