import { React } from 'react';
import Chip from './Chip';
import EmptyList from './EmptyList';
import '../index.css';
import { Link } from 'react-router-dom';

const BlogPost = ({ content }) => {
    return (
        <>
            <Link className='blogPost-goBack' to='/'>
                <span> &#8592;</span> <span>Go Back</span>
            </Link>
            {content ? (
                <div className='blog-wrap'>
                    <header>
                        <p className='blog-date'>Published {content.created}</p>
                        <h1>{content.title}</h1>
                        <div className='blog-subCategory'>

                            <div>
                                <Chip label={content.tags[0].name} />
                            </div>

                        </div>
                    </header>
                    <div className='blog-content' dangerouslySetInnerHTML={{ __html: content.body }}></div>
                </div>
            ) : (
                <EmptyList />
            )}
        </>
    );
};

export default BlogPost;