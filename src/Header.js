import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { useStateValue } from './StateProvider';
function Header() {
  const [{basket}]=useStateValue()
  return (
    <nav className='header'>
      {/* logo */}
      <Link to='./'>
      <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon-logo' className='header_logo'/>
      </Link>
      {/* serarch box */}
      <div className='header_search'>
      <input type='text' className='header_searchInput'/>
      <SearchIcon className='header_searchIcon'/>
      </div>
      {/* navbar option */}
      <div className='header_nav'>
     <Link to='./login' className='header_link'>
      <div className='header_option'>
        <span className='header_optionLineOne'>Hello Suresh</span>
        <span className='header_optionLineTwo'>Sign In</span>
      </div>
     </Link>
{/* nav for returns and orders */}
     <Link to='./' className='header_link'>
      <div className='header_option'>
        <span className='header_optionLineOne'>Returns</span>
        <span className='header_optionLineTwo'>& Orders</span>
      </div>
     </Link>
    {/* //  nav for prime */}
     <Link to='./' className='header_link'>
      <div className='header_option'>
        <span className='header_optionLineOne'>Your</span>
        <span className='header_optionLineTwo'>Prime</span>
      </div>
     </Link>
{/* link4 basket */}
     <Link to='./checkout'>
    <div className='header_optionBasket'>
      <ShoppingBasketIcon/>
      <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
    </div>
     </Link>
      </div>
    </nav>
  )
}

export default Header
