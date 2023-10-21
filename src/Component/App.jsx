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
          isExisting = true
          return { ...existingProduct, count: existingProduct.count + 1 }
        }
        return existingProduct
      })
      if (!isExisting) return [...list, {...product, count: 1}]
      console.log('new', newList)
      return newList
    })
  }


  const deleteFromCart = (product, isPermanentRemoval = false) => {
    setCart(list => {
      
      if(isPermanentRemoval) return list.filter((existingProduct) => existingProduct.id !== product.id)

      const newList = list.map((existingProduct) => {
        if (existingProduct.id === product.id) {
          return { ...existingProduct, count:  existingProduct.count - 1 }
        }
        return existingProduct
      })
      return newList
    })
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
