import React from 'react';
import Nav from './nav.js';
import './index.css';  // Ensure you are importing the CSS

function Data() {
  return (
    <div className='search-page'>
      <Nav />
      <h1><a href='./page' className='search'>SEARCH RECIPE</a></h1>
    </div>
  );
}

export default Data;

