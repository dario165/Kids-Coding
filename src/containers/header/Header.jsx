import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing.</h1>
      <p>Develop early skills in logic, problem solving, and reading comprehension.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

   

   
  </div>
  <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
  
);

export default Header;