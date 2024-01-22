import React from 'react';
import '../index.css';
// import { NavLink } from 'react-router-dom';
// import Link from 'next/link';
import { Navbar, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'

const NavBarHome = () => {
    return (
        <div>
            <Navbar fluid rounded>
                <NavbarToggle />
                <NavbarCollapse>
                    <NavbarLink href="/about">About</NavbarLink>
                    <NavbarLink href="/blog">Blog</NavbarLink>
                    <NavbarLink href="/projects">Projects</NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </div>

    )
}

export default NavBarHome;