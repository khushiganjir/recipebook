import React from 'react';
import Nav from './nav.js';
import './index.css';  // Ensure you are importing the CSS

function Data() {
  return (
    <div className='search-page'>
      <Nav />
     <Link to="/page" className='search'>SEARCH RECIPE</Link>
    </div>
  );
}

export default Data;

