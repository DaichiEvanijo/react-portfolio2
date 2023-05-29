import React from 'react'
import {Link} from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa"

import {useContext} from "react"
import{ShopContext} from "../context/Context"

const Header = () => {
  const {getTotalCartNumber} = useContext(ShopContext)

  const totalNumber = getTotalCartNumber()
  return (
    <header className='header'>
      <h1><Link to="/">Daichi</Link></h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li className='cartlogo'>
            <Link to="/cart">
              <div>
                <FaShoppingCart color="black" fontSize="20px" />
                {totalNumber>0 &&<span>{totalNumber}</span>}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header