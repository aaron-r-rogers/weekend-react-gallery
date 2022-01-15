import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [galleryList, setGalleryList] = useState([])

  //On load, get images
  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = () => {
    axios.get('/gallery')
      .then(res => {
        setGalleryList(res.data)
        console.log('response.data is:', response.data);
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
        <p>Gallery goes here</p>
        <div className='container'>
          <img className='child' src="images/chair.jpg"/>
          <img className='child' src="images/frances.jpg"/>
          <img className='child' src="images/gondola.jpg"/>
          <img className='child' src="images/loggers.jpg"/>
          <img className='child' src="images/northern.jpg"/>
          <img className='child' src="images/tree.jpg"/>
        </div>
      </div>
    );
}

export default App;
