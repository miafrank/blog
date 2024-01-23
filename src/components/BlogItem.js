import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const BlogItem = ({ blog, content }) => {
    return (
        <div>
            <img class="h-auto max-w-xl" src={blog.featured_image} alt="" />
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{blog.title}</h1>
            <p class="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">{blog.summary}</p>
            <footer>
                <Link className='' to={`/blog/${blog.title}`} onClick={() => { content(blog) }}>
                    <a href="/blog/:blog_id" class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Read more...
                        <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </Link>
            </footer>
        </div>
    );
};

export default BlogItem;