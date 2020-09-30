import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container } from "react-bootstrap"
import "./jumbotron.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Jumbo = () => (
    <Jumbotron>
        <Container className="inner-jumbo">
            <h3 className="text-center py-2">Built w/ Gatsby.</h3>
            <p className="text-center font-weight-light py-2">
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
            </p>
            <div className="text-center" id="social-jumbo">
                <a href="https://www.github.com/rossme" target="_blank" rel="norefferer"><FontAwesomeIcon icon={["fab", "github-square"]} size="2x" className="mx-1"/></a>
                <a href="https://www.linkedin.com/in/rossbuddie/" target="_blank" rel="norefferer"><FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" className="mx-1"/></a>
            </div>

        </Container>
    </Jumbotron>
);

export default Jumbo;