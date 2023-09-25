import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import "./index.css"

const ProductGallery = () => {
  const [products,setProducts] = useState([])

  const navigate = useNavigate()
  useEffect(()=>{
    const getProducts = async()=>{
        const response  = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
        setProducts(response.data)
    }
    getProducts()
  },[])
  return (
    <div className='products-page'>
        <h3>SELECT A PRODUCT AND ADD TO CART</h3>
        <ul className='products-list'>
            {products && products.map(product=>{
                return (<li key={product.id} className='product-item'onClick={()=>navigate(`/products/${product.id}`,{state:product})}>
                    <img src={product.images[0]} alt={product.title} className='product-img'/>
                    <p className='product-title'>{product.title}</p>
                    <p className='product-price'>$ {product.price}</p>
                    <button className='view-item-btn' >View Item</button>
                </li>)
            })}
        </ul>
    </div>
  )
}

export default ProductGallery