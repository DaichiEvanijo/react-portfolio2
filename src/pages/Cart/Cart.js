import React from 'react'
import CartItem from "./CartItem";
import {Link} from "react-router-dom";

import {useContext} from "react";
import {ShopContext} from "../../context/Context";



const Cart = ({products}) => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext)

  const totalAmount = getTotalCartAmount()

  const allCartItemsZero = Object.values(cartItems).every((value) => value === 0);

  return (
    <div className='container'>
      <h2 className='title'>Cart</h2>
      <div className='cartmap'>
        {products.map((product) => {
          if (cartItems[product.id] === 0) {
            return null; 
          }
          return <CartItem key={product.id} product={product} />
        })}
        {allCartItemsZero && <p className='textwhennoitem'>No items in the cart.</p>}
      </div>
      <div className="checkout">
        <p>Subtotal:${totalAmount}</p>
        <div className='buttonflex'>
          <Link to="/shop"><button>Continue Shopping</button></Link>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart