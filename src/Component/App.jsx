import { useState } from 'react'
import './App.css'
import { Outlet } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'

function App() {
  const [cart, setCart] = useState([])
  const addToCart = (product) => {
    setCart(list => {
      let isExisting = false
      const newList = list.map((existingProduct) => {
        if (existingProduct.id === product.id) {
          !existingProduct.count ? existingProduct.count = 1 : existingProduct.count++
          isExisting = true
        }
        return existingProduct
      })
      if (!isExisting) return [...list, product]
      console.log('new', newList)
      return newList
    })
  }

  const deleteFromCart = (id) => {
    setCart(list => list.filter((product)=> product.id != id))
  }
  return (
  <>
    <Header cart={cart}></Header>
    <Outlet context={{cart, addToCart, deleteFromCart}}/>
    <Footer></Footer>
  </>
  )
}

export default App
