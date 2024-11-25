import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';


function App() {

  // render
  return (
    <>
      <AppHeader />

      <AppMain />
    </>
  );
};

export default App