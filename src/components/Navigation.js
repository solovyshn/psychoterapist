import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export const Navigation = () => {
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                            Therapists
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/meetings">
                            Meetings
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    
}