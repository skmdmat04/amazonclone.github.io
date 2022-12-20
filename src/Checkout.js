import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import Subtotal from './Subtotal';
import CheckoutProducts from './CheckoutProducts';
function Checkout() {
    const [{basket}]=useStateValue();
    // console.log(basket)
  return (
    <div className='checkout'>
        <div className='checkout_left'>
        <img className='checkout_ad' src='
     https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.JPG' alt='add'/> 
    {
        basket?.length==0 ? (
            <div>
                <h2>Your Shopping Basket is Empty</h2>
                <p>You have no items in your basket. To buy one or more items
                    , click "Add to basket" next to the item.
                </p>
            </div>
        ) :(
            <div className='checkout_productlist'>
                <h2 className='checkout_title'>Your Shopping basket</h2>
                {basket.map(item=>(
                    <CheckoutProducts
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                    />
                ))}
                </div>
        )
    }
        </div>
     {basket.length>0 && 
     <div className='checkout_right'>
        <Subtotal/>
     </div>
        }
    </div>
  )
}

export default Checkout
