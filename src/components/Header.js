import React from 'react';
import '../index.css';
import header from '../images/Home.png'

const Header = () => (
    <div class="relative isolate overflow-hidden py-24">
        <header>
            <img class="h-auto bg-auto max-w-full object-cover relative" src={header} alt="" />
        </header>
    </div>
);

export default Header;