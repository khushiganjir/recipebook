import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';  // Ensure you are importing the CSS

function Nav() {
  return (
    <div className='nav'>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/page">Page</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
