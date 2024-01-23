import { React, useState, useEffect } from 'react';
import EmptyList from '../components/EmptyList';
import BlogList from '../components/BlogList';
import Header from '../components/Header';
import { blogList } from '../config/Api';
import NavBarHome from '../components/NavBar';

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
            <Header />
            <NavBarHome
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)} />
            {!blogs.length ? (
                <EmptyList />
            ) : (
                <BlogList blogs={blogs} content={BlogContent} />
            )}
        </div>
    );
};
export default HomePage;
