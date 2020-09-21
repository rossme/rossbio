import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import "./nav.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => (
    <div class="nav-alt">
        <Navbar>
            <Navbar.Brand href="/">
                <h3>Ross Buddie</h3>
            </Navbar.Brand>
            {/* <FontAwesomeIcon icon={["fab", "github"]} /> */}
        </Navbar>
    </div>
);

export default Nav;