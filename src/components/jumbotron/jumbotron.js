import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container } from "react-bootstrap"
import "./jumbotron.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Jumbo = () => (
    <Jumbotron fluid>
        <Container className="inner-jumbo">
            <h3 className="text-center py-2">Built w/ React & Gatsby</h3>
            <p className="text-center font-weight-light py-2">
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
            </p>
            <div className="text-center">
                <FontAwesomeIcon icon={["fab", "github-square"]} size="2x" className="mx-1" />
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" className="mx-1" />                
            </div>

        </Container>
    </Jumbotron>
);

export default Jumbo;