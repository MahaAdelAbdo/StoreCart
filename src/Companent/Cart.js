import { Button ,Stack } from 'react-bootstrap';
import React from 'react'
 
import Data from "../Data.json"
import Format from "./FormtCurrenty"
import {UseShoppingCart} from "../Context/ShoppingCartProvider"
const Cart = ({id,quanty}) => {
    const {removeItem} =UseShoppingCart()
    const item =Data.find((i)=>i.id ===id);
    if(item==null)return null;
  
  return (
    <div className='Cart'>
  <Stack className='d-flex me-auto align-items-center m-2 stack'  direction="horizontal" gap={2}>
  <img src={item.image} className="my-2 stackImage" alt={item.title}  style={{width:"125px",height:"75px",objectFit:"cover" }}/>
 

<div className="me-auto ml-2" style={{fontSize:".6rem"}}>
  {item.title} {"  "}
  {quanty >1 &&( <span>
  x{quanty}
  </span>)}
<div className="text-muted">
  {Format(item.price)}
</div>
</div>
  <div style={{fontSize:".7rem",color:"brown"}}>
  {Format(item.price*quanty)}
</div>
 
<Button className="
outline-danger" size="sm" onClick={()=>removeItem(id)}>
  X
</Button>
</Stack>
    </div>
  )
}

export default Cart