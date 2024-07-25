import { Link } from "react-router-dom";
import "../index.css";

const BlogItem = ({ blog, content }) => {
  return (
    <div>
      <h1 class="mb-4 mt-4 text-left text-nowrap font-thin tracking-normal text-gray-900 sm:text-lg md:text-lg lg:text-2xl">
        {blog.title}
      </h1>
      <p
        class="leading-snug truncate break-words ml-2 text-center mb-5 text-black"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></p>
      <footer>
        <Link
          className=""
          to={`/blog/${blog.title}`}
          onClick={() => {
            content(blog);
          }}
        >
          <button
            href="/blog/:blog_id"
            type="button"
            class="text-white bg-blue-800 hover:bg-pink-600 focus:ring-4 focus:ring-blue-300 font-normal rounded-md text-xs px-5 py-2.5 me-2 mb-2 float-right"
          >
            Read More
          </button>
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
