import React from 'react'
import checkout from "../../assets/checkout.png"
import "./index.css"

const Checkout = () => {
  return (
    <div className='checkout-page'>
        <img src={checkout} alt="checkout" className='checkout-img'/>
    </div>
  )
}

export default Checkout