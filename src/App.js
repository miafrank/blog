import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPost from './pages/BlogPost';
import { Fragment, React, useState } from 'react';

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
              <Route
                path='/blog/:id'
                element={<BlogPost content={getBlogContent} />}
              />
            </Fragment>
          </Routes>
        </div>
      </div>
    </div >
  );
}
export default App;
