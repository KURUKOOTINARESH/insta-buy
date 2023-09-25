import React from 'react'
import "./index.css"

import signUp from "../../assets/signup.png"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [userName,setUserName] = useState('')

  const navigate = useNavigate()

  const onJoinTheCLub = ()=>{
    let data = {
      email,
      password,
      userName,
      isLoggedin:false
    }
    localStorage.setItem("user",JSON.stringify(data))
    navigate('/login')
  }
  return (
    <div className='login-page'>
        
            <div className='login-content'>
                <h1>InstaBuy!</h1>
                <p>One place where brands come<br/> together from all across the world.</p>
                <form onSubmit={onJoinTheCLub}>
                    <div className='input-fields-con'>
                        <input type='email' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} required/>
                        <input type='password' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} required/>
                    </div>
                    <input type='text' placeholder='Enter Full Name' onChange={(e)=>setUserName(e.target.value)} required/>
                    <button className='start-shopping-btn' type='submit'>Join the club</button>
                    <p>Already a member?, <span className='click-here-text' onClick={()=>navigate("/login")} style={{color:"white",textDecoration:"underline"}}>Click here!</span></p>
                </form>
            </div>
            <div className='mega-sale-img-con'>
                <img src={signUp} alt='mega-sale' className='mega-sale-img'/>
            </div>
    </div>
  )
}

export default SignUp