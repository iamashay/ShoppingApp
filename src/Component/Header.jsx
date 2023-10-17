import './Header.css'
import logo from '../assets/logo.png'
import cartIcon from '../assets/cart-icon.png'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <header>
            <div id='logo'><Link to='/'><img src={logo} alt='logo' /></Link></div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/shop'>Shop</Link></li>
                    <li><Link to='/about-us'>About Us</Link></li>
                </ul>
                <div className='cart'>
                    <img src={cartIcon} alt='your cart' />
                    <span className='cart-info'>1</span>
                </div>
            </nav>
        </header>
    )
}

export default Header;