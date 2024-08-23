import "./App.css";
import { Fragment, React, useState } from "react";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPost from "./components/BlogPost";
import ProjectsPage from "./pages/ProjectsPage";
import ConnectPage from "./pages/ContactPage";
import HomeFooter from "./components/Footer";
import BlogPage from "./pages/BlogPage";
import NavBar from "./components/NavBar";

function App() {
  const [getBlogContent, setGetBlogContent] = useState([]);
  const getData = (blog) => {
    setGetBlogContent(blog);
  };

  return (
    <div class="flex flex-col md:mx-auto bg-gradient bg-scroll bg-cover bg-no-repeat">
      <NavBar />
      <div
        class="md:container md:mx-auto justify-stretch bg-white"
        className="page-container"
      >
        <Routes>
          <Fragment>
            <Route class="flex-1" path="/" element={<HomePage />} />
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
