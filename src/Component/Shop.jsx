import { useParams } from "react-router-dom"
import './Shop.css'
import { useEffect, useState } from "react"
import Item from "./Item"
import spinnerGif from '../assets/spinner.gif'

function Shop() {
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
            <section className="shop-info shop-section">
                <h2 className="shop-title">Shop {name && `: ${name}`}</h2>
            </section>
                {
                    !itemData.length ? <img src={spinnerGif} style={{width: '65px'}} alt='spinner'></img>  :
                    <section className="shop-items shop-section">
                    {itemData.map((item) => <Item key={item.id} data={item}></Item>)}
                    </section>
                }

        </div>
    )
}

export default Shop;