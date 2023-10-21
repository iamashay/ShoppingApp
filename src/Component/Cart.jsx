import { useParams, useOutletContext } from "react-router-dom"
import './Cart.css'
import { useEffect, useState } from "react"
import spinnerGif from '../assets/spinner.gif'
import Item from './CartItem'

function calculateTotal(data) {
    const totalCost = data.reduce((total, currentProduct) => {
        const productCount = currentProduct.count || 1; 
        return total + (productCount * currentProduct.price);
    }, 0)
    return Math.floor(totalCost);
}

function Cart() {
    const {cart, addToCart, deleteFromCart} = useOutletContext()
    console.log(cart)

    return (
        <div className='page-container'>
            <section className="cart-info normal-section">
                <h2 className="section-title">Cart</h2>
            </section>
            {
                !cart.length ? <div className="empty-cart">No items in your cart!</div>  :
            <>
               <section className="cart-items cart-section">
                    {cart.map((item) => <Item key={item.id} data={item} addToCart={addToCart} deleteFromCart={deleteFromCart}></Item>)}
                </section>
                <section className="cart-summary cart-section">
                            <div className="total">Total: <span>{calculateTotal(cart)}</span></div>
                            <button className="checkout-btn">Checkout</button>
                </section>
            </>
            }


        </div>
    )
}

export default Cart;