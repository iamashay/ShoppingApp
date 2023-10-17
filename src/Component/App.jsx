import { useState } from 'react'
import './App.css'
import { Outlet } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
  <>
    <Header></Header>
    <Outlet />
    <Footer></Footer>
  </>
  )
}

export default App
