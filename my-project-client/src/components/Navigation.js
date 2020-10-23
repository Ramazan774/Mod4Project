import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

class Navigation extends React.Component {
    render(){
        return(
            <Navbar bg='light' expand='lg'>
                <Navbar.Brand href='/'><strong>todolist</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav' >
                    <Nav className='mr-auto'>
                        <Nav.Link href='/signup'>sign up</Nav.Link>
                        <Nav.Link gref='/login'>login</Nav.Link>

                        <NavDropdown title='more' id='basic-nav-dropdown' right>
                            <NavDropdown.Item href='#action/3.1'>my account</NavDropdown.Item>
                            <NavDropdown.Item href='/todolists'>todolists</NavDropdown.Item>
                            <NavDropdown.Divider />
                                <NavDropdown.Item href='#action/3.4'>log out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </ Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation