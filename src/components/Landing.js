import React from 'react';
import { Link } from 'react-router-dom';



function Landing() {

  return (
    <div className='landing'>
      <h1 className='landing__title'>LoveSearch</h1>
     
      <Link to='/app'>
          <button className='landing__btn'>Get started</button>
      </Link>
      
    </div>
  );
}

export default Landing;