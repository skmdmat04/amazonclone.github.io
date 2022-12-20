import React, { useState,useEffect } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import Header from './Header'
import Login from './Login'
import { useStateValue } from './StateProvider'
// import {Navbar} from './navbar/Navbar'
import Home from './Home'
import Checkout from './Checkout'
import {auth} from './firebase';
function App() {
const [{user},dispatch]=useStateValue();
useEffect(()=>{
const unsubscribe= auth.onAuthStateChanged((authuser)=>{ 
  if(authuser){
dispatch({
  type:"SET_USER",
  user:authuser
})
  }else{
  dispatch({
    type:"SET_USER",
    user:null
  })
  }
})
return ()=>{
  unsubscribe();
}
},[])
console.log(user)
  return (
    <Router>
      <div className='App'>
      {/* <Header/> */}
       <Routes>
       {/* <Route path='/' element={<Header/>}/> */}
       <Route path='/' element={<Home/>}/>
       
       {/* / <h1>Home page</h1> */} 
        <Route path='/checkout' element={<Checkout/>}/>
          {/* <h1>Checkout</h1> */}
        <Route path='/login' element={<Login/>}>
          {/* <h1>Login page</h1> */}
        </Route>
       </Routes>
    </div>
    </Router>
    

  )
}

export default App
