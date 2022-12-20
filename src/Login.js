import React,{useState} from 'react'
import './Login.css'
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
// import {auth} from './firebase'
import {Link,useNavigate} from 'react-router-dom';
function Login() {
  const navigate=useNavigate();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('');
  const auth=getAuth();
  const login=e=>{
   
    e.preventDefault();
    // console.log(auth)
signInWithEmailAndPassword(auth,email,password)
.then(async(userd)=>{
navigate('/')
console.log(userd)
})
.catch(err=>{alert(err.message)
console.log(email,password)
})
  }
  const register=e=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
.then((auth)=>{
  navigate('./');

})
.catch(err=>alert(err.message))
  }
  return (
    <div className='login'>
      <Link to="/login">
     <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
     alt=""/>
     </Link>
     <div className='login_container'>
      <h1>Sign in</h1>
      <form>
        <h5>E-mail</h5>
        <input type='text' value={email} onChange={e=>{setEmail(e.target.value)}} />
        <h5>Password</h5>
        <input type='password' value={password} onChange={e=>setPassword(e.target.value)} />
        <button onClick={login} type='submit' className='logn_signInButton'>Sign in</button>
      </form>
      <p>
      By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
      </p>
      <button onClick={register} className='login_registeButton'>Create your Amazon Account</button>
     </div>
    </div>
    
  )
}

export default Login
