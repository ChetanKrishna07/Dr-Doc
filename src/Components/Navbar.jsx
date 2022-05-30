import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Colors from '../colorsPallate'


const Navigation = () => {

    const navbar = {
        boxShadow: '0px 2px 8px rgba(97, 97, 97, 0.25)',
        backgroundColor: Colors.bg
    }

    const navItems = {
        color: Colors.tertiary,
    }

    return (
        <>
            <Navbar collapseOnSelect expand='sm' style={navbar}>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="/" style={navItems}>Home</Nav.Link>
                            <NavDropdown title={<span style={navItems}>Services</span>} id="responsive-nav-dropdown">
                                <NavDropdown.Item href="/doctors" style={navItems}>Find Doctor</NavDropdown.Item>
                                <NavDropdown.Item href="/medicines" style={navItems}>Medicines</NavDropdown.Item>
                                <NavDropdown.Item href="/diagnostics" style={navItems}>Diagnostics</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/about" style={navItems}>About Us</Nav.Link>
                            <Nav.Link href="/support" style={navItems}>Support</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;