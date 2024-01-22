import { React, useState, useEffect } from 'react';
import EmptyList from '../components/EmptyList';
import BlogList from '../components/BlogList';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { blogList } from '../config/Api';
import NavBarHome from '../components/NavBar';
import HomeFooter from '../components/Footer';

const HomePage = ({ data }) => {
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

    const BlogContent = (id) => {
        data(id);
    };

    useEffect(() => {
        blogList().then((res) => {
            setBlogs(res);
        })
    }, []);

    return (
        <div>
            <div className='home-header'></div>
            <Header />
            <div className='search-bar-nav-container'>
                <NavBarHome />
                <div className='search-bar-home-page'>
                    <SearchBar
                        value={searchKey}
                        clearSearch={handleClearSearch}
                        formSubmit={handleSearchBar}
                        handleSearchKey={(e) => setSearchKey(e.target.value)}
                    />
                </div>
            </div>
            {!blogs.length ? (
                <EmptyList />
            ) : (
                <BlogList blogs={blogs} content={BlogContent} />
            )}
            <HomeFooter />
        </div>
    );
};
export default HomePage;
