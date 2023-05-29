import{createContext} from "react";
import {useState} from "react";
import products from "../Data/Products";

export const ShopContext = createContext(null);


const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i<= products.length ; i++) {
    cart[i] = 0
  }
  return cart;
}


export const ShopContextProvider = ({children}) => {
  const [cartItems, setCartItems] =useState(getDefaultCart());

  const getTotalCartNumber = () => {
    let totalNumber = 0;
    for(const item in cartItems){
      totalNumber += cartItems[item] 
    }    
    return totalNumber;
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
      let itemInfo = products.find((product) => product.id === Number(item));
      totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount;
  };

  const addToCart =(itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  };
  const removeFromCart =(itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  };

  const updateCartItemCount = (itemId, newAmount) => {
    if(!isNaN(newAmount)){
      setCartItems((prev) => ({...prev, [itemId] : newAmount}))
    }else{
      alert('please input a value')
    }
  };

  return (
    <ShopContext.Provider value={{
      cartItems, addToCart, removeFromCart, updateCartItemCount,getTotalCartAmount,getTotalCartNumber}}>
        {children}
    </ShopContext.Provider>
  );
};