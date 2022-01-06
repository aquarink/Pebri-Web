import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {

    return (
        <>
            <Navbar bg="light" variant="light" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="/">Juri Pebrianto</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer exact to="/artikel">
                                <Nav.Link>Article</Nav.Link>
                            </LinkContainer >
                            <LinkContainer exact to="/portofolio">
                                <Nav.Link>Portofolio</Nav.Link>
                            </LinkContainer>
                            <LinkContainer exact to="/tentang">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;