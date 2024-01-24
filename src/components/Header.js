import React from 'react';
import '../index.css';
import header from '../images/Home.png'

const Header = () => (
    <header className='home-header'>
        <img src={header} alt="" class="h-full w-full object-contain" />
    </header >
);

export default Header;