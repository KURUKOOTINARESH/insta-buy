import React from 'react'
import {Row,Col} from "react-bootstrap"
import "./index.css"

import megaSale from "../../assets/mega-sale.png"
import {BsArrowRight} from "react-icons/bs"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')
  const [errMsg,setErrMsg] = useState('')

  const navigate = useNavigate()

  const onLogin = (e)=>{
    e.preventDefault()
    const userData = JSON.parse(localStorage.getItem("user"))
    if(userData){
        if(userName === userData.userName && password === userData.password){
            localStorage.setItem("user",JSON.stringify({...userData,isLoggedin:true}))
            navigate("/")
        }
        else{
            setErrMsg("Invalid username or password")
        }
    }else{
        setErrMsg("User does not exist, Please join the club")
    }

  }

  return (
    <div className='login-page'>
        
            <div className='login-content'>
                <h1>InstaBuy!</h1>
                <p>One place where brands come<br/> together from all across the world.</p>
                <button className='start-shopping-btn guest-btn' onClick={()=>{
                        let data = {
                            email:"123@gmail.com",
                            password:"123",
                            userName:"Guest",
                            isLoggedin:true
                          }
                          localStorage.setItem("user",JSON.stringify(data))
                          navigate("/products")
                    }}>Start Shopping As a Guest</button>
                <form onSubmit={onLogin}>
                    <div className='input-fields-con'>
                        <input type='text' placeholder='Enter Username' onChange={(e)=>setUserName(e.target.value)} required/>
                        <input type='password' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} required/>
                    </div>
                    <button type='submit' className='start-shopping-btn'>Start Shopping <BsArrowRight/></button>
                    
                    <p>Join the club, <span className='click-here-text' onClick={()=>navigate("/signup")} style={{color:"white",textDecoration:"underline"}}>Click here!</span></p>
                    <p style={{color:"red"}}>{errMsg}</p>
                </form>
            </div>
            <div className='mega-sale-img-con'>
                <img src={megaSale} alt='mega-sale' className='mega-sale-img'/>
            </div>
    </div>
  )
}

export default Login