import React from 'react';
import '../index.css';
import header from '../images/Home.png'

const Header = () => (
    <header className='home-header'>
        <img src={header} alt='' />
        <h2>My Personal Blog</h2>
        <h1>
            <span></span> Check out my blogs<span></span>
        </h1>
        <p>
            Read, enjoy <br /> and contribute.
        </p>
    </header>
);

export default Header;