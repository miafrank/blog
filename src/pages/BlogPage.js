import { React, useState, useEffect } from 'react';
import BlogList from '../components/BlogList';
import { blogList } from '../config/Api';

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
        <div class="h-screen">
            <BlogList blogs={blogs} content={BlogContent} />
        </div >
    );
};
export default BlogPage;
