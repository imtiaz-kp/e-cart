import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Wishlist() {
  const wishlistArry=useSelector((state)=>state.wishlistReducer)
  const dispatch= useDispatch()
  const handleWishlistCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product))
  }
  return (
    <div style={{marginTop:"100px"}}>
       <Row className='m-5 ' style={{ marginTop: "100px" }}>
      {
        wishlistArry?.length > 0 ? wishlistArry?.map((product, index) => (
          <Col key={index} className='mb-5 ' sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow rounded' style={{ width: '18rem', height: '27rem' }}>
              <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
              <Card.Body>
                <Card.Title>{product?.title}</Card.Title>
                <Card.Text>
                  <p> {product?.description.slice(0, 55)}...</p>
                  <h5>${product.price}</h5>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                <Button onClick={()=>dispatch(removeFromWishlist(product.id))} className='btn btn-light'><i className="fa-solid fa-trash text-danger fa-2x"></i></Button>

                <Button onClick={()=>handleWishlistCart(product.id)} className='btn btn-light'><i className="fa-solid fa-cart-plus text-success fa-2x"></i></Button>

             </div>
              </Card.Body>
            </Card>
          </Col>)) :<div style={{height:"40vh"}} className='w-100 d-flex flex-column justify-content-center align-items-center' >
            
            <img height={'200px'} src="https://bakestudio.in/assets/images/cart/empty-cart.gif" alt="" />

             <h3 className='text-primary fw-bold fs-4'>Your wishlist is empty </h3>
              <Link style={{textDecoration:'none'}}  to={'/'} className='btn btn-success rounded mt-3' >Back TO Home</Link>
             </div>
         


      }
    </Row>
    </div>
  )
}

export default Wishlist