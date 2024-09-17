import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import Nav from './components/Nav'
import Product from './components/Product'
import About from "./pages/About"

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Product />}></Route>
      </Routes>
    </>
  )
}

export default App
