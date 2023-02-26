import React from 'react'
 
import Offcanvas from 'react-bootstrap/Offcanvas';
import {UseShoppingCart} from "../Context/ShoppingCartProvider"
import Format from "./FormtCurrenty"
import Cart from '../Companent/Cart'
import Data from "../Data.json"
const ShoppingCart = ({isOpen}) => {
const {current,closeOpen} =UseShoppingCart()
  return (
    <div>
         <Offcanvas show={isOpen} onHide={closeOpen} placement="end" >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {current.map((item)=>(
            <Cart {...item} key={item.id}/>
          ))}
         <div className='m-3'>
          Total
          {Format(
            current.reduce((totel,current)=>{
              const item =Data.find((i)=>i.id===current.id);
              return  totel+(item?.price||0)*current.quanty 
            },0)
            // i plase totle + price +quanty
            
          )}
          
         </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default ShoppingCart