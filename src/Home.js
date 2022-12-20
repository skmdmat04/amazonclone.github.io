import React from 'react'
import Header from './Header'
import './home.css'
import Product from './Product'
function Home() {
  return (
    <>
         <Header/>
      <div className='home'>
        <img src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt='background' className='home_image'/>
 {/* products */}
 <div className='product_row'>
 <Product
id='092425'
title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
price={11.96}
rating={5}
image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg'
/>
<Product
id='6242625'
title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
price={56.32}
rating={5}
image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
/>
 </div>
 <div className='product_row'>
 <Product
id='9830920'
title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
price={87.87}
rating={5}
image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
/>
<Product
id='64781909'
title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
price={51.96}
rating={5}
image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
/>
<Product
id='13203590'
title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
price={110.50}
rating={4}
image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
/>
<Product
id='1624781'
title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
price={110.50}
rating={4}
image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
/>
 </div>
      </div>
    </>
  )
}

export default Home
