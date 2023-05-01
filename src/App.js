import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {Route, Routes} from "react-router-dom";
import React from 'react';
import Whyus from "./Components/Whyus";
import Contact from './Components/Contact';



function App() {
  return (
    <div className="App">
      
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/whyus' element={<Whyus />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
