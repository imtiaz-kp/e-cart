import React from 'react'
import { Nav,Navbar,Container,Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
       <div style={{backgroundColor:'rgb(106, 27, 154)',zIndex:'1'}} className='position-fixed top-0 w-100 mb-5' >
            <Navbar expand="lg"  >
            <Container>
              <Navbar.Brand ><Link to={'/'} style={{ textDecoration: 'none',fontWeight:'bolder' }} ><i className="fa-solid fa-truck-fast " ></i>{" "}E-Cart</Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link className='btn btn-outline-light border rounded' >
                    <Link className='d-flex align-items-center' to={'/wishlist'} style={{ textDecoration: 'none',fontWeight:'bolder' }} ><i className="fa-solid fa-heart text-danger me-2"></i>Wishlist
                  <Badge className="ms-2 rounded" bg="light" >0 </Badge>
                  </Link>
                  </Nav.Link>
                  <Nav.Link className='btn btn-outline-light border ms-3 rounded' >
                    <Link className='d-flex align-items-center' to={'/cart'} style={{ textDecoration: 'none',fontWeight:'bolder' }} ><i className="fa-solid fa-cart-shopping text-warning me-2"></i>Cart
                  <Badge className="ms-2 rounded" bg="light" >0 </Badge>
                  </Link>
                  </Nav.Link>
                  </Nav>
              </Navbar.Collapse>
            </Container>
         
            </Navbar>
       </div>
    </>
  )
}

export default Header