import { useEffect, useState } from 'react';
import { getBlogById } from '../api/client';
import BlogList from '../components/BlogList'

const BlogPage = ({data}) => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    getBlogById().then((res) => {
      setBlogs(res)
    });
  }, [])

  const BlogContent = (id) => {
    data(id);
};
  // Update BlogList to use flowbite typography for article formatting
  return (
    <div class='h-screen'>
      <BlogList blogs={blogs} content={BlogContent}/>
    </div>
  )
}
export default BlogPage;
