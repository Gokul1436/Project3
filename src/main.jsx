import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './Compounts/About.jsx'
import Tour from './Compounts/Tour.jsx'
import Conduct from './Compounts/Conduct.jsx'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Login from './Compounts/Login.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/About.jsx" element={<About />}/>
    <Route path="/Tour.jsx" element={<Tour />}/>
    <Route path="/Conduct.jsx" element={<Conduct/>}/>
    <Route  path="/Login.jsx" element={<Login/>}/>
  </Routes>
  </BrowserRouter>
 
  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
