import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import DefaultLayout from './pages/DefaultLayout';
import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';
import AboutPage from './pages/AboutPage';


function App() {

  // render
  return (
    <>

      <BrowserRouter>

        <Routes>

          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/posts' element={<PostsPage />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  );
};

export default App