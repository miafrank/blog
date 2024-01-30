import React from 'react';
import BlogItem from './BlogItem';
import '../index.css';

const BlogList = ({ blogs, content }) => {
    return (
        <div class='flex justify-center'>
            <dl class="max-w-md text-gray-700 dark:text-black">
                <div class="flex flex-col pt-3">
                    <dt class="mb-3 text-gray-500 dark:text-gray-400">{
                        blogs.map((blog) => (
                            <BlogItem blog={blog} content={content} />
                        ))}</dt>
                </div>

                <div class="flex flex-col pt-3">
                    <dt class="mb-3 text-gray-500 md:text-lg dark:text-gray-400">{
                        blogs.map((blog) => (
                            <BlogItem blog={blog} content={content} />
                        ))}</dt>
                </div>
            </dl>
        </div>
    );
};

export default BlogList;