import { useParams } from "react-router-dom";

function Shop() {
    const { name } = useParams();
    return (
        <div className='page-container'>
            <section className="shop-info">
                <h2 className="shop-title">Shop</h2>
            </section>
        </div>
    )
}

export default Shop;