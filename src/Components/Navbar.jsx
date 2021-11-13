import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Colors from '../colorsPallate'

const Navigation = () => {

    const navbar = {
        boxShadow: '0px 2px 8px rgba(97, 97, 97, 0.25)',
        backgroundColor: Colors.bg
    }
    return (
        <>
            <Navbar collapseOnSelect expand='sm' style={navbar}>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='navItems'>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Services" id="responsive-nav-dropdown">
                                <NavDropdown.Item href="#services/#doctor">Find Doctor</NavDropdown.Item>
                                <NavDropdown.Item href="#services/#medicine">Medicines</NavDropdown.Item>
                                <NavDropdown.Item href="#services/#diagnostics">Diagnostics</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#about">About Us</Nav.Link>
                            <Nav.Link href="#support">Support</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;