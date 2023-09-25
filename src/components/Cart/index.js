import React from 'react'
import { Table } from 'react-bootstrap'
import cartPage from "../../assets/cartPage.png"

import "./index.css"
import { useNavigate } from 'react-router-dom'

const Cart = ({cartItems}) => {
    const navigate = useNavigate()

   let totalQuantity = 0
   let totalPrice = 0
  return (
    <div className='cart-page'>
        <div className='cart-details-section'>
            <h3>YOUR CART : </h3>
            <Table className='cart-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(cartItems).map(cartId=>{
                            const {title,quantity,price} = cartItems[cartId]
                            totalQuantity +=quantity
                            totalPrice+= (quantity*price)
                            return(
                                <tr>
                                    <td>{title}</td>
                                    <td>{quantity}</td>
                                    <td>$ {quantity*price}</td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td>Total</td>
                        <td>{totalQuantity}</td>
                        <td>$ {totalPrice}</td>
                    </tr>
                </tbody>
            </Table>
            <button className='add-to-cart-btn' onClick={()=>navigate("/checkout")}>Checkout</button>
            <button style={{marginLeft:"1rem"}} className='add-to-cart-btn' onClick={()=>navigate("/products")}>Back to shop</button>
        </div>
        <div className='cart-img-section'>
            <img src={cartPage} alt='cart' className='cart-page-img'/>
        </div>
    </div>
  )
}

export default Cart