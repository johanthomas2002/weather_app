import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


function Header() {
  return (
    <div>
       
        <Navbar expand="lg" className="bg-success">
            <Container>
            <Navbar.Brand href="#" className='text-white fs-3'><i class="fa-solid fa-cloud"></i> Weather App</Navbar.Brand>
            </Container>
        </Navbar>
        
    </div>
  )
}

export default Header
