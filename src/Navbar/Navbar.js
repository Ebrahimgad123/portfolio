import React from 'react'
import { Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap";
import {Link} from 'react-router-dom'
import './Navbar.css'

 function Navbar() {
  
  return (
         <NavbarBs sticky='top' className=' shadow-sm ' style={{backgroundColor:'black',color:'white'}}>
     <Container  >
        <h4 className='d-flex align-items-center mt-1' >Ibrahim</h4>
        <Nav className='mr-auto' >
            <Nav.Link className='effect'style={{color:'white'}} as={Link} to='/hello'>Home</Nav.Link> 
            <Nav.Link className='effect'style={{color:'white'}} as={Link} to='/play'>Game</Nav.Link>
            <Nav.Link className='effect'style={{color:'white'}} as={Link} to='/Resume'>Resume</Nav.Link>
           
        </Nav>
     
     </Container>
    </NavbarBs>
   
 
  )
}
export default Navbar