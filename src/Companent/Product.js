import React, { useState } from 'react'
 

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 import Format from "./FormtCurrenty"
 import  {UseShoppingCart} from "../Context/ShoppingCartProvider"
 
 import "./Home.css"
const Product = ({id,image,price,title,category}) => {
    const {getItemQuentity 
        ,removeItem,
        increaseCartQuantity,dicreaseCartQuantity} 
        =UseShoppingCart()
    const quanty =getItemQuentity(id)
  return (

    <Card className='Card' style={{ width: '18rem' ,height:"20rem",margin:"2rem .5rem"}}>
      <Card.Img className='card_image' variant="top" style={{height:"100px",objectFit:"cover",objectPosition:"center",
 
    
    }} src={image} />
      
      <Card.Body className='Card-Body'>
     <div className="text-card"> 
        <Card.Title>{title}</Card.Title>
         
         <Card.Text>
        {Format(price)}
        </Card.Text>
        </div>
        {quanty===0?<div>
           <Button  className='Add'onClick={()=>increaseCartQuantity(id)}variant="primary">Add to cart</Button>
             
           </div>
     
        
        :
        <div className='btn-Datate'>
            <div className='m-1 btn-plassAnManis'>
            <Button onClick={()=>increaseCartQuantity(id)}>+</Button>
            <span className='m-2'>{quanty}</span>
            <Button  onClick={()=>dicreaseCartQuantity(id)}>-</Button>

            </div>
            <Button className='m-1 Delate' style={{width:"6rem"}} 
            onClick={()=>removeItem(id)}
            variant="danger">Delate</Button>
        </div>
        }
        
      </Card.Body>
    </Card>
 
     
  )
}

export default Product