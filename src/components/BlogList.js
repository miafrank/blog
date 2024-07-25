import BlogItem from "./BlogItem";
import "../index.css";

const BlogList = ({ blogs, content }) => {
  const blogList = [blogs];
  return (
    <div class="flex justify-evenly pt-16">
      <dl class="max-w-md text-gray-700 dark:text-black">
        <dt class="mb-3 text-gray-500 dark:text-gray-400">
          {blogList.map((blog) => (
            <BlogItem blog={blog} content={content} />
          ))}
        </dt>
      </dl>
    </div>
  );
};

export default BlogList;
