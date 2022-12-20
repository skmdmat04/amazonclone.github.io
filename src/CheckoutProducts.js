import React from 'react'
import './CheckoutProducts.css'
import { useStateValue } from './StateProvider'
function CheckoutProducts({id,title,price,rating,image}) {
  const [{basket},dispatch]=useStateValue();
    // console.log(id,title,price,rating,image)
    const removeFromBasket=()=>{
      console.log(id,title,price,rating,image)
     dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id,
     }) 
    }
  return (
    <div className='checkoutProduct'>
        <img src={image} alt='image' className='checkoutProduct_image' />
       <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{title}</p>
        <p className='checkoutProduct_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='checkoutProduct_rating'>
        {
            Array(rating).fill()
            .map((_,i)=><p key={i}>🌟</p>)
        }
      </div>
      <button onClick={removeFromBasket}>Remove from basket</button>
       </div>
    </div>
  )
}

export default CheckoutProducts
