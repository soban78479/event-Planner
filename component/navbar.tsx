import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'
import { useAuth } from '../context/authContext'
import { useRouter } from 'next/router'
import sellProperty from '@/pages/sellProperty'

// import UploadImageToStorage from '@/pages/upload'

const NavbarComp = () => {
  const { user, logout } = useAuth()
  const router = useRouter()
  const handleSellPropertyClick = () => {
    router.push('/sellProperty')
  }
  const handleSellAllEvents = () => {
    router.push('/allEvents')
  }
  const handleMyEvent = () => {
    router.push('/myEvent')
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>Event4You</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ? (
              <div style={{ display: 'flex' }}>
              <Nav.Link onClick={handleSellPropertyClick} style={{ display: 'inline-block' }}>
                  Add Event
                </Nav.Link>
                <Nav.Link onClick={handleMyEvent} style={{ display: 'inline-block' }}>
                  My Event
                </Nav.Link>
                <Nav.Link onClick={handleSellAllEvents} style={{ display: 'inline-block' }}>
                 Events
                </Nav.Link>
                <Nav.Link 
                  onClick={() => {
                    logout()
                    router.push('/login')
                  }}  style={{ display: 'inline-block' }}
                >
                  Logout
                </Nav.Link>
                {/* <Cart items={[]} removeItem={function (id: number): void {
                  throw new Error('Function not implemented.')
                } }></Cart> */}
              </div>
            
            ) : (
              <>
                <Link href="/signup" passHref>
                  <Nav.Link onClick={()=>{
                    router.push('/signup')
                  }}>Signup</Nav.Link>
                </Link>
                <Link href="/login" passHref>
                  <Nav.Link  onClick={()=>{
                    router.push('/login')
                  }}>Signin</Nav.Link>
                </Link>
                <Nav.Link onClick={handleSellAllEvents} style={{ display: 'inline-block' }}>
               Events
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp