import React from 'react';
import { Link } from 'react-router-dom';
import couple from '../images/couple.png';


function Landing() {

  return (
    <div >
      <div className='landing'>
         <h1 className='landing__title'>Love<span className='landing__title__span'>Search</span></h1>
      <Link to='/app'>
          <button className='landing__btn'>Get started!</button>
      </Link>
      </div>
       
      <aside>
          <div className="box1">
          <article className="box1__land">
            <i className='bx bx-file-find box1__land__icon'></i>
              <p className="box1__land__p">Find the most engaged singles</p>
          </article>
          <article className="box1__land">
             <i className='bx bx-id-card box1__land__icon'></i>
              <p className="box1__land__p">Detailed profiles, search by custom criteria</p>
          </article>
          <article className="box1__land">
              <i className='bx bxs-drink box1__land__icon' ></i>
              <p className="box1__land__p">Theme events for unforgettable dates.</p>
          </article>
     </div>
     <div className='box2'>
      <article className='box2__land'>
        <h3 className='box2__land__title'>Why LoveSearch?</h3>
        <p className='box2__land__subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <img src={couple} alt="" className='box2__land__img' />
        <p className='box2__land__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </article>
     </div>
      </aside>
      
    </div>
  );
}

export default Landing;