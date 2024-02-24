import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const BlogItem = ({ blog, content }) => {
    return (
        <div>
            <img class="h-auto max-w-md rounded-lg shadow-xl" src={blog.featured_image} alt="" />
            <h1 class="mb-4 mt-4 text-left font-thin tracking-wide text-gray-900 sm:text-2xl md:text-4xl lg:text-6xl">{blog.title}</h1>
            <p class="leading-wide break-words ml-2 text-left font-serif mb-5 text-black">{blog.summary}</p>
            <footer>
                <Link className='' to={`/blog/${blog.title}`} onClick={() => { content(blog) }}>
                    <button href="/blog/:blog_id" type="button" class="text-white bg-blue-800 hover:bg-pink-600 focus:ring-4 focus:ring-blue-300 font-normal rounded-md text-xs px-5 py-2.5 me-2 mb-2 float-right">Read More
                    </button>
                </Link>
            </footer>
        </div>
    );
};

export default BlogItem;