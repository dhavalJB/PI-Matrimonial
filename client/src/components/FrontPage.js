// FrontPage.js

import React from 'react';
import './css/FrontPage.css';
import myImage from '../img/91394.jpg';
import bgIMG from '../img/another-image.jpg';
import myLego from '../img/lego.jpg';

const FrontPage = () => {
  return (
    <div className="front-page">
             <div className="fornt-container">
  <div className="fornt">
    <img src={myLego} />
  </div>
</div>

      <div className='punch-line'>
        <p>
"Welcome to Pi Matrimonial, the first of its kind on the Pi Network. Find your perfect match with us!"</p>
      </div>
      <div className='bgImg'>
        <img src={bgIMG} alt="bg-img" />
      </div>
      <div className='punch-line'>
        <p>Find your perfect match!</p>
      </div>
      <main>
        <section className="top-card">
          <img src={myImage} alt="user picture" />
          <div className="menu-icon">
            <div className="menu item1"></div>
            <div className="menu item2"></div>
          </div>
          <div className="name">
            <p>Dhaval <span>Bhatti</span></p>
          </div>
        </section>

        <section className="middle-card">
          <h1>About</h1>
          <p>"I'm a family-oriented individual seeking a life partner who values mutual respect, understanding, and companionship."</p>
        </section>

        <div className='homeFooter'>
          <h1>Contact</h1>
          <a href="#" className="social-icon facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-icon twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon google"><i className="fab fa-google"></i></a>
          <a href="#" className="social-icon github"><i className="fab fa-github"></i></a>
          <a href="#" className="social-icon linkedin"><i className="fab fa-linkedin"></i></a>

          <section className="links">
            <button className="blinks">Connect</button>
            
            
          </section>
        </div>
      </main>
    </div>
  );
};

export default FrontPage;
