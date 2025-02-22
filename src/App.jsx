import { useState } from 'react'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Camera from './Components/Camera'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import MapView from './Pages/MapView';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Landingpage' element={<LandingPage/>}/>
      <Route path ='/api/map' element={ <MapView/>}/>
      <Route path ='/api/cam' element={<Camera/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Router>
   
   
   
  )
}

export default App
