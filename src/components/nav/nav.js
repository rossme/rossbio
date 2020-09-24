import React from 'react';
import { Navbar } from 'react-bootstrap';
import "./nav.css"

const NavElement = () => (
    <div className="nav-alt">
        <Navbar className="justify-content-center">
            <img
                src="https://res.cloudinary.com/djnfnwxgu/image/upload/v1600899550/rossb/logo_wtyfbb.jpg"
                width="50px"
                height="50px"
                className="d-inline-block align-center"
                alt="Ross Buddie"
            />
        </Navbar>
    </div>
);

export default NavElement;