import heroImg from '../assets/hero.jpg'
import './HomePage.css'

function HomePage() {
    return (
        <>
            <section className='banner'>
                <img src={heroImg} alt='shopping banner' />
                <div className='banner-info'>
                    <div className='banner-title'>You need it? We Have it!</div>
                    <button>Shop Now</button>
                </div>
            </section>
        </>
    )
}

export default HomePage;