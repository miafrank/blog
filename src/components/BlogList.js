import React from 'react';
import BlogItem from './BlogItem';
import '../index.css';

const BlogList = ({ blogs, content }) => {
    return (
        <div className='blogList-wrap'>
            <dl class="max-w-md text-black-900 divide-y divide-black-200 dark:text-black dark:divide-black-700">
                <div class="flex flex-col pb-3">
                    <dt class="mb-3 text-gray-500 md:text-lg dark:text-gray-400">{
                        blogs.map((blog) => (
                            <BlogItem blog={blog} content={content} />
                        ))}</dt>
                </div>

                <div class="flex flex-col pb-3">
                    <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">{
                        blogs.map((blog) => (
                            <BlogItem blog={blog} content={content} />
                        ))}</dt>
                </div>
            </dl>
        </div>
    );
};

export default BlogList;