import './CartItem.css'

function QuantityControl({product, addToCart, deleteFromCart}){
    return <div className='quantity-control'>
        <span className='decrease quantity-but' onClick={() => deleteFromCart(product, product.count === 1) }>-</span>
        <div className='quantity' >{product.count}</div>
        <span className='increase quantity-but' onClick={() => addToCart(product)}>+</span>
    </div>
}

function CartItem({data, addToCart, deleteFromCart}) {
    const {title, price, image, count} = data
    return (
        <div className='cart-item-card'>
            <img className="cart-item-image" src={image} alt={title + 'image'}></img>
            <div className='cart-item-info'>
                    <div className='cart-item-name'>{title}</div>
                    <div className='cart-item-price'>Rs. {price}</div>
                    <QuantityControl product={data} addToCart={addToCart} deleteFromCart={deleteFromCart}></QuantityControl>
                    <div className='cart-item-subtotal'>Subtotal: Rs. {price*count}</div>
            </div>
            <div className='cart-item-delete' onClick={() => deleteFromCart(data, true)}>X</div>
        </div>
    )
}

export default CartItem