import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import "./nav.css"

const Nav = () => (
    <div className="nav-alt">
        <Navbar>
            <Navbar.Brand href="/">
                <h3>Ross Buddie</h3>
            </Navbar.Brand>
        </Navbar>
    </div>
);

export default Nav;