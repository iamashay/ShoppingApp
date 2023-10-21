import { useParams, useOutletContext } from "react-router-dom"
import './Shop.css'
import { useEffect, useState } from "react"
import Item from "./ShopItem"
import spinnerGif from '../assets/spinner.gif'

function Shop() {
    const {cart, addToCart} = useOutletContext()
    console.log(cart)
    const { name } = useParams();
    const [itemData, setItemData] = useState([])
    useEffect(() => {
        setItemData([])
        let url = 'https://fakestoreapi.com/products/'
        if (name) url = `https://fakestoreapi.com/products/category/${name}`
        fetch(url)
            .then(res=>res.json())
            .then(json=>setItemData(json))
    }, [name])
    return (
        <div className='page-container'>
            <section className="shop-info normal-section">
                <h2 className="section-title">Shop {name && `: ${name}`}</h2>
            </section>
                {
                    !itemData.length ? <img src={spinnerGif} style={{width: '65px'}} alt='spinner'></img>  :
                    <section className="shop-items normal-section">
                    {itemData.map((item) => <Item key={item.id} data={item} addToCart={addToCart}></Item>)}
                    </section>
                }

        </div>
    )
}

export default Shop;