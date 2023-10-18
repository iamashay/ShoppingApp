import heroImg from '../assets/hero.jpg'
import './HomePage.css'
import {Link} from 'react-router-dom'

function HomePage() {
    return (
        <>
            <section className='banner'>
                <img src={heroImg} alt='shopping banner' />
                <div className='banner-info'>
                    <div className='banner-title'>You need it? We Have it!</div>
                    <Link to='/shop'><button>Shop Now</button></Link>
                </div>
            </section>
        </>
    )
}

export default HomePage;