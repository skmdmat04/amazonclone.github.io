import React from 'react'
import './Subtotal.css'
import { useStateValue } from './StateProvider'
import { getbasketTotal } from './reducer';
function Subtotal() {
    const [{basket},dispatch]=useStateValue();
    console.log(getbasketTotal(basket))
  return (
    <div className='subtotal'>
        <p>Subtotal ({basket.length} items): <strong>{`$${getbasketTotal(basket).toFixed(2)}`}</strong></p>
        <small className='subtotal_gift'>
        <input type={'checkbox'}/> This order contains a gift
        </small>
     <button>Proceed to checkout</button> 
    </div>
  )
}

export default Subtotal
