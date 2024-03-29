import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {Route, Routes} from "react-router-dom";
import React from 'react';
import Whyus from "./Components/Whyus";
import Contact from './Components/Contact';
import Shop from "./Components/Shop"
import ShopCats from './Components/ShopCats';
import ShopDogs from './Components/ShopDogs';
import ShopRabbits from './Components/ShopRabbits';
import ShopParrots from './Components/ShopParrots';



function App() {
  return (
    <div className="App">
      
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/whyus' element={<Whyus />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/shop-cats' element={<ShopCats />}/>
        <Route path='/shop-dogs' element={<ShopDogs />}/>
        <Route path='/shop-rabbits' element={<ShopRabbits />}/>
        <Route path='/shop-parrots' element={<ShopParrots />}/>

      </Routes>
    </div>
  );
}

export default App;
