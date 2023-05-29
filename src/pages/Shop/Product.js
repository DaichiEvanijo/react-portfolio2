import React from 'react'

import {useContext} from "react"
import {ShopContext} from "../../context/Context"

const Product = ({currentPost}) => {

  const {addToCart, cartItems} = useContext(ShopContext);

  const cartItemAmount = cartItems[currentPost.id]

  return (
    <div className='eachproduct'>
      <li key={currentPost.id}>
        <img src={currentPost.image} alt={currentPost.name} style={{width:"100%"}} className='eachproductimg'/>
        <h2>{currentPost.name}</h2>
        <p>EUR {currentPost.price.toLocaleString()}</p>
        <button onClick={() => addToCart(currentPost.id)}>Add to Cart {cartItemAmount >0 && <>({cartItemAmount})</>}</button>
      </li>
    </div>
  )
}

export default Product