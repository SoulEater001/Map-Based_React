import { useState } from 'react'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Camera from './Components/Camera'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import MapView from './Pages/MapView';
import {APIProvider} from '@vis.gl/react-google-maps';
import LandingPage from './Pages/LandingPage';


const App =()=> {
<APIProvider apiKey={'AIzaSyBrMH7uXcgncIGJ9UCMOwwo6SGs-75udLA'} onLoad={() => console.log('Maps API has loaded.')}></APIProvider>
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
