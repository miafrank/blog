import { React } from 'react';
import Chip from './Chip';
import EmptyList from './EmptyList';
import '../index.css';
import { Link } from 'react-router-dom';

const BlogPost = ({ content }) => {
    console.log({ content })
    return (
        <>
            <Link className='blogPost-goBack' to='/blogs'>
                <span> &#8592;</span> <span>Go Back</span>
            </Link>
            {content ? (
                <div className='blog-wrap'>
                    <header>
                        <p className='blog-date'>Published {content.created}</p>
                        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{content.title}</h1>
                    </header>
                    <p class="mb-3 whitespace-pre-line text-sm text-gray-900 dark:text-white"
                        dangerouslySetInnerHTML={{ __html: content.body }}></p>
                </div>
            ) : (
                <EmptyList />
            )}
        </>
    );
};

export default BlogPost;