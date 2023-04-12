import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Tranding from './components/Rout/Trending'
import Subscriptions from './components/Rout/Subscriptions'
import Library from './components/Rout/Library'
import History from './components/Rout/History'
import Watch from './components/Rout/Watch'
import Favourites from './components/Rout/Favourites'
import Liked from './components/Rout/Liked'
import Music from './components/Rout/Music'
import Game from './components/Rout/Game'
import Settings from './components/Rout/Settings'
import Home from "./components/Rout/Home";

import './App.css'

function App() {
  

  return (
     <BrowserRouter>
     <Routes>
      <Route path='' element={<Header/>}/>
      <Route path='/Trending' element={<Tranding/>}/>
      <Route path='/Subscriptions' element={<Subscriptions/>}/>
      <Route path='/Library' element={<Library/>}/>
      <Route path='/History' element={<History/>}/>
      <Route path='/Watch' element={<Watch/>}/>
      <Route path='/Favourites' element={<Favourites/>}/>
      <Route path='/Liked' element={<Liked/>}/>
      <Route path='/Music' element={<Music/>}/>
      <Route path='/Game' element={<Game/>}/>
      <Route path='/Settings' element={<Settings/>}/>
      <Route path='/Home' element={<Home />}/>
      
     </Routes>
     </BrowserRouter>
  )
}

export default App








