import React from 'react';
import './App.css';

function App() {
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
