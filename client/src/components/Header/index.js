import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="">
      <div className="">
        <Link to='/'>
          <h1>Reel Me In 2.0</h1>
        </Link>

        <nav className=''>
          <Link to='/login'>Login</Link>
          
          <Link to='/signup'>Signup</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;