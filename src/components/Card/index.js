import React from 'react';
import './css/index.css';

const Card = ({productName, brandName, mainImage, price, smallImage1, smallImage2}) => {
    return (
        <div className="container">
            <div className='inner-container'>
                <div className='shoe-details'>
                    <div className='product-name'>{productName}</div>
                    <div className='brand-name'>{brandName}</div>
                </div>
                <div className='.image-container'>
                    <img className='.image' src={mainImage} alt='shoe' />
                </div>
                <div className='price-container'>
                    <div className='price-wrapper'>
                        <div className='price-label'>Price</div>
                        <div className='price'>${price}</div>
                    </div>
                    <div className='small-images-container'>
                        <img className='small-images' src={smallImage1} alt='shoe1'/>
                        <img className='small-images' src={smallImage2} alt='shoe1' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;
