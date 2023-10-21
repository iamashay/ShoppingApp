import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Component/App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './Component/HomePage.jsx'
import Shop from './Component/Shop.jsx'
import Cart from './Component/Cart.jsx';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "shop/:name", element: <Shop /> },
        { path: "shop/", element: <Shop /> },
        { path: "cart/", element: <Cart /> },
      ]
    }
  ]);
  return <RouterProvider router={router} />
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
