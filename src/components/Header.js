import React from 'react';
import '../index.css';
import header from '../images/Home.png'

const Header = () => (
    <header>
        <img class="bg-auto max-w-full object-cover relative" src={header} alt="" />
    </header>
);

export default Header;