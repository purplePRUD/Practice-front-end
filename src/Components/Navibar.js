import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../Nav.css';

export default function NaviBar() {
    return (
        <>
            <Navbar collapseOnSelect direction="horizontal" expand="lg" bg="dark" variant="dark" className="px-2">
                <Navbar.Brand className="ms-2">
                    <div id="Logo" className="px-2">
                        PURPLE
                    </div>
                </Navbar.Brand>
                <div className='vr' expand="lg"/>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-2 links">
                        <Nav.Link><Link to="/">About</Link></Nav.Link>
                        <Nav.Link><Link to="/projects">Projects</Link></Nav.Link>
                        <Nav.Link><Link to="/contacts">Contacts</Link></Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link className="ms-2"><Link to="/hire">Hire Me</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>    
        </>
)}