import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.css'
import Feature from './components/Feature'
import Home from './components/Home'
import ShowRecommendation from './components/ShowRecommendation'


function App() {

  return (
    <>
   <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/showrecommendation" element={<ShowRecommendation />} />
      </Routes>
      </div>
      </Router>
    </>
  )
}

export default App;
