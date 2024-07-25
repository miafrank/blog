import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPost from "./components/BlogPost";
import ProjectsPage from "./pages/ProjectsPage";
import ConnectPage from "./pages/ContactPage";
import { Fragment, React, useRef, useState } from "react";
import HomeFooter from "./components/Footer";
import BlogPage from "./pages/BlogPage";
import NavBar from "./components/NavBar";

function App() {
  const [getBlogContent, setGetBlogContent] = useState([]);
  const getData = (blog) => {
    setGetBlogContent(blog);
  };

  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const testing = useRef();
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const filtered = blogs.filter((blog) => {
      return blog.tags[0].name.toLowerCase().includes(searchKey.toLowerCase());
    });
    testing.current = blogs;
    setBlogs(filtered);
  };

  // const handleClearSearch = () => {
  //   blogList().then((res) => {
  //     blogs.current = res;
  //   });
  //   // setSearchKey('');
  // };

  // useEffect(() => {
  //   blogList().then((res) => {
  //     blogs.current = res
  //     // setBlogs(res);
  //   })
  // }, [blogs]);

  return (
    <div class="flex flex-col md:mx-auto bg-gradient bg-scroll bg-cover bg-no-repeat">
      {/* </div><div class="flex flex-col md:mx-auto bg-gradient-to-r from-hot-pink to-aqua bg-cover "> */}
      {/* TODO: Refactor/Fix NavBar Search */}
      <NavBar
        value={searchKey}
        // clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {/* bg-gradient-to-r from-aqua via-hot-pink to-royal-blue */}
      <div
        class="md:container md:mx-auto justify-stretch bg-white"
        className="page-container"
      >
        <Routes>
          <Fragment>
            <Route
              class="flex-1"
              path="/"
              element={<HomePage data={getData} />}
            />
          </Fragment>
          <Fragment>
            <Route
              class="flex-1"
              path="/blogs"
              element={<BlogPage data={getData} />}
            />
          </Fragment>
          <Fragment>
            <Route
              class="flex-1"
              path="/blog/:id"
              element={<BlogPost content={getBlogContent} />}
            />
          </Fragment>
          <Fragment>
            <Route class="flex-1" path="/projects" element={<ProjectsPage />} />
          </Fragment>
          <Fragment>
            <Route class="flex-1" path="/connect" element={<ConnectPage />} />
          </Fragment>
        </Routes>
      </div>
      <HomeFooter />
    </div>
  );
}
export default App;
