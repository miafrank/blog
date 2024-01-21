import React, { useState } from 'react';
import '../index.css';
import { NavLink } from 'react-router-dom';
import { blogList } from '../config/Api';
import SearchBar from './SearchBar';

const NavBar = () => {
    const [blogs, setBlogs] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };

    const handleSearchResults = () => {
        const filtered = blogs.filter((blog) => {
            return blog.tags[0].name.toLowerCase().includes(searchKey.toLowerCase());
        });
        setBlogs(filtered);
    };

    const handleClearSearch = () => {
        blogList().then((res) => {
            setBlogs(res);
        });
        setSearchKey('');
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-elements-container">
                    <ul>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            {/* Search Bar */}
                            <SearchBar
                                value={searchKey}
                                clearSearch={handleClearSearch}
                                formSubmit={handleSearchBar}
                                handleSearchKey={(e) => setSearchKey(e.target.value)}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;