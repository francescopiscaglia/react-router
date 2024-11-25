import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import DefaultLayout from './pages/DefaultLayout';
import HomePage from './pages/HomePage';


function App() {

  // render
  return (
    <>

      <BrowserRouter>

        <Routes>

          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/about'></Route>
            <Route path='/posts'></Route>
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  );
};

export default App