import { React } from 'react';
import Chip from '../components/Chip';
import EmptyList from '../components/EmptyList';
import '../index.css';
import { Link } from 'react-router-dom';
import header from '../images/cyber_punk_2.jpg'

const Blog = ({ content }) => {
    return (
        <div className='blogPost-background' src={header}>
            <img src={header} alt=''></img>
            <Link className='blog-goBack' to='/'>
                <span> &#8592;</span> <span>Go Back</span>
            </Link>
            {
                content ? (
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
                )
            }
        </div >
    );
};

export default Blog;