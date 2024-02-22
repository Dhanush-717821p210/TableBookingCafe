import './App.css';
import Contact from './Contact';
import Home from './Home';
import Menu from './Menu';
import About from './About';
import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import Login from './Login';

const App = () => {
  return (
   <div>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      <hr/>
      </div>
  );
}

export default App;
