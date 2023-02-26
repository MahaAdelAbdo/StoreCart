 import React, {createContext, useContext, useState } from 'react'
 import ShoppingCart from "../Companent/ShoppingCart"
 const  CreateContextShopping=createContext()
 const ShoppingCartProvider = ({children}) => {
  const [current,setCurrent]=useState([])
  const [isOpen ,setIsopen]=useState(false)
  const Open =()=>{
  setIsopen(true)
}
const closeOpen =()=>{
  setIsopen(false)
}
 const CartQuanty =
 current.reduce((quanty,item )=> 
item.quanty+ quanty,0
  //  quanty is anshal value 
  //  item is object 
  //  in cart is here (quanty) when i click (add) or (+) i add item.quanty
  
    )
 
  const getItemQuentity =(id)=>{
    return current.find((item)=>item.id===id)?.quanty||0
  }
  const increaseCartQuantity =(id)=>{
  setCurrent((current)=>{
    if(current.find(item=>item.id==id)==null){
      return [...current,{id,quanty:1}]
    }else{
      return current.map((item)=>{
        if(item.id==id){
          return{...item,quanty:item.quanty+1}
        }
         else{return item}
      })
    }
  })
  }
    const View =(id)=>{
  setCurrent((current)=>{
    if(current.find(item=>item.id==id)==null){
      return current.filter((item)=>item.id!==id)
    }else{
      return current.map((item)=>{
        if(item.id===id){
          return{...item}
        }
         else {
          return item
        };
      })
    }
  })
  }

    const dicreaseCartQuantity =(id)=>{
  setCurrent((current)=>{
    if(current.find(item=>item.id==id)==null){
      return current.filter((item)=>item.id!==id)
    }else{
      return current.map((item)=>{
        if(item.id===id){
          return{...item,quanty:item.quanty-1}
        }
         else {
          return item
        };
      })
    }
  })
  }
const removeItem =(id)=>{
  setCurrent((current)=>current.filter((item)=>item.id!==id ))
}


   return (
      <CreateContextShopping.Provider value={{current, getItemQuentity ,removeItem ,increaseCartQuantity ,dicreaseCartQuantity ,Open,closeOpen,CartQuanty}}>
        {children}
        <ShoppingCart isOpen={isOpen} />
      </CreateContextShopping.Provider>
   )
 }
 
 export default ShoppingCartProvider 


 export const UseShoppingCart = () => {
   return useContext(CreateContextShopping)
 }
  