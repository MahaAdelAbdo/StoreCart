 import React from 'react'
 
 import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import{ Navbar ,Button}from 'react-bootstrap';
import { NavLink  } from 'react-router-dom';
import {AiOutlineShoppingCart} from "react-icons/ai"
 import "./Nav.css"
 import {UseShoppingCart} from "../Context/ShoppingCartProvider"
 const Navber = () => {
  const {Open ,CartQuanty}=UseShoppingCart()
   return (
     <div>
    <>
      <Navbar bg="light" variant="light" className='nav'>
        <Container>
          
          <Nav className="me-auto Nav-link">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        
          </Nav>
        </Container>
       <div  >
         <Button className='icon-navber'>
           <span>{CartQuanty}</span>
          <div onClick={Open} className="button">

          <AiOutlineShoppingCart />
          </div>
          
        </Button>
       </div>
      </Navbar>
      <div className="backgroundImage">
     
      </div>
 </>

 
     </div>
   )
 }
 
 export default Navber