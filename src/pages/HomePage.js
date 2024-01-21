import { React, useState, useEffect } from 'react';
import EmptyList from '../components/EmptyList';
import BlogList from '../components/BlogList';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { blogList } from '../config/Api';

const HomePage = ({ data }) => {
    console.log({ blogList })
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
            {/* Page Header */}
            <Header />
            {/* Search Bar */}
            <SearchBar
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
            />
            {/* Blog List & Empty View */}
            {!blogs.length ? (
                <EmptyList />
            ) : (
                <BlogList blogs={blogs} content={BlogContent} />
            )}
        </div>
    );
};
export default HomePage;
