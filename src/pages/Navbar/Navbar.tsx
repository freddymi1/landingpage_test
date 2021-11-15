import React from 'react'
import { Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
interface Props{
    logoHeader: string
}
export const Layout: React.FC<Props> = ({logoHeader}) =>{
    return (
        
            <Navbar expand="lg" className="sticky-nav">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img src={logoHeader} className="logoHeader" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto ms-auto mb-2 mb-lg-0" navbarScroll>
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About me</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action3">Service</Nav.Link>
                            <Nav.Link href="#action4">Contact</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            
                            <button className="btn btn-primary">Contact</button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}
