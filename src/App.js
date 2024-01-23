import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPost from './components/BlogPost';
import { Fragment, React, useState } from 'react';
import HomeFooter from './components/Footer';
import BlogPage from './pages/BlogPage';

function App() {
  const [getBlogContent, setGetBlogContent] = useState([]);
  const getData = (blog) => {
    setGetBlogContent(blog);
  };

  return (
    <div>
      <div className='app-container'>
        <div className='page-container'>
          <Routes>
            <Fragment>
              <Route path='/' element={<HomePage data={getData} />} />
            </Fragment>
            <Fragment>
              <Route path='/blogs' element={<BlogPage data={getData} />} />
            </Fragment>
            <Fragment>
              <Route
                path='/blog/:id'
                element={<BlogPost content={getBlogContent} />}
              />
            </Fragment>
          </Routes>
        </div>
      </div>
      <HomeFooter />
    </div >
  );
}
export default App;
