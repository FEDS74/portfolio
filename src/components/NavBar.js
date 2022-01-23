import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';

import '../components/NavBar.css'

export const NavBar = () => (
    <div>
        <Navbar
            className="px-5 fixed-top"
            collapseOnSelect="collapseOnSelect"
            expand="lg">
            <Container>
                <Navbar.Brand href="#home">FEDS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>                         
                        <Nav.Link href="#work">Work</Nav.Link>                       
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
)