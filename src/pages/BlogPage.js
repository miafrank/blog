import { useEffect, useState } from "react";
// import { getBlogById } from "../api/client";

import comingSoonImage from "../images/coming_soon.png";

const BlogPage = ({ data }) => {
  // const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   getBlogById().then((res) => {
  //     setBlogs(res);
  //   });
  // }, []);

  // const BlogContent = (id) => {
  //   data(id);
  // };
  // TODO: Update BlogList to use flowbite typography for article formatting
  // TODO: Remove 'coming soon' image after creating blog posts
  return (
    <div class="flex justify-center items-center h-screen">
      {/* <BlogList blogs={blogs} content={BlogContent} /> */}
      <img class="rounded-lg" src={comingSoonImage} alt="image description" />
    </div>
  );
};
export default BlogPage;
