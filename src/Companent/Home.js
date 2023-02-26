 import React, { useEffect, useState } from 'react'
 import Product from './Product'
 import Container  from "react-bootstrap/Container"
  import Row from "react-bootstrap/Row"
   import Col from "react-bootstrap/Col"
   import Data from "../Data.json"
    import "./Home.css"
 const Home = () => {
 
   return (
    <> 
     <Container className='Products'>
      <div className='products-text'>
      <h3>products</h3>
      <div className='border'></div>
      </div>
      <div className="Grid-row"> 
      <Row className="d-flex justify-content-center align-items-center ">
         {Data.map((product)=>(
        <Col className='Grid' xs={12} sm={6} md={6} lg={4} key={product.id}>
           <Product {...product}/>
        </Col>
       ))}
      </Row>
      </div>
     </Container>
     </>
   )
 }
 
 export default Home