import './Item.css'
import starImg from '../assets/star.png'
const abridgeText = (text, count=40) => text.length <= count ? text : `${text.slice(0, count).trim()}...`

function ReviewStar ({score, count}) {
    return (
        <div className='review'>
            <div className='review-display'>
                <span className='review-score'>
                    {score}
                </span>
                <img className='review-star' src={starImg} alt='review star'></img>
            </div>
            <span className='review-count'>({count})</span>
        </div>
    )
}

function Item({data}) {
    const {title, price, rating, image} = data
    return (
        <div className='item-card'>
            <img className="item-image" src={image} alt={title + 'image'}></img>
            <div className='item-info'>
                <div className='item-name'>{abridgeText(title)}</div>
                <ReviewStar count={rating.count} score={rating.rate}></ReviewStar>
                <div className='item-price'>Rs. {price}</div>
                <button className='add-cart'>Add To Cart</button>
            </div>
        </div>
    )
}

export default Item