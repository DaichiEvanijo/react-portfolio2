import React from 'react'

import {useContext} from "react"
import{ShopContext} from "../../context/Context"

const CartItem = ({product}) => {

  const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext)

  return (
    <li key={product.id} className='cartitem'>
      <img src={product.image} alt={product.name} style={{width:"100%"}} className='eachproductimg' />  
      <div>
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>
      <div>
        <button onClick={()=>removeFromCart(product.id)}>-</button>
        <input value={cartItems[product.id]} onChange={(e)=>updateCartItemCount(product.id, Number(e.target.value))} />
        <button onClick={()=>addToCart(product.id)}>+</button>
      </div>
    </li>
  )
}

export default CartItem