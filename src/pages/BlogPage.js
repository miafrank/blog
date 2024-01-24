import { React, useState, useEffect } from 'react';
import BlogList from '../components/BlogList';
import { blogList } from '../config/Api';
import NavBar from '../components/NavBar';

const BlogPage = ({ data }) => {
    const [blogs, setBlogs] = useState([]);

    const BlogContent = (id) => {
        data(id);
    };

    useEffect(() => {
        blogList().then((res) => {
            setBlogs(res);
        })
    }, []);

    return (
        // TODO: Implement functional search on nav
        <div className='blog-page'>
            <NavBar
                value=""
                clearSearch=""
                formSubmit=""
                handleSearchKey="" />
            <BlogList blogs={blogs} content={BlogContent} />
        </div>
    );
};
export default BlogPage;
