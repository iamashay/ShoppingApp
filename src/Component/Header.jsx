import './Header.css'
import logo from '../assets/logo.png'
import cartIcon from '../assets/cart-icon.png'
import {Link, useOutletContext} from 'react-router-dom'
import dropdownIcon from '../assets/dropdown.svg'
import { useEffect, useState } from 'react'
function Menu({name, link, dropdownItem}) {
    if (!dropdownItem) 
        return <li><Link to={link}>{name}</Link></li>
    
    return (

            <li className='menu'>
                        <Link to={link} className='dropdown'><span>{name}</span><img src={dropdownIcon} alt='dropdown icon' className='dropdown-sign'></img></Link>
                        <div className='dropdown-content'>
                        {dropdownItem.map((item) => <Link className='subMenu' name={item.name} key={item.link} to={item.link}>{item.name}</Link>)}
                    </div>
            </li>


        )
}

function Header({cart}) {
    const [shopCategory, setShopCategory] = useState(false)
    const menuList = [
        {name: 'Home', link: '/'},
        {name: 'Shop', link: '/shop', dropdownItem: shopCategory},
        {name: 'About Us', link: '/about-us'},
    ]
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>{
                const formatData = json.map((item) => ({name: item, link: '/shop/'+item}))
                setShopCategory(formatData)
            })
    }, [])
    return (
        <header>
            <div id='logo'><Link to='/'><img src={logo} alt='logo' /></Link></div>
            <nav>
                <ul>
                    {menuList.map((item) => <Menu name={item.name} key={item.link} link={item.link} dropdownItem={item.dropdownItem}></Menu>)}
                </ul>
                <Link className='cart' to='/cart'>
                    <img src={cartIcon} alt='your cart' />
                    {cart.length > 0 && <span className='cart-tracker'>{cart.length}</span>}
                </Link>
            </nav>
        </header>
    )
}

export default Header;