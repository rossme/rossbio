import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container } from "react-bootstrap"
import "./jumbotron.css"

const Jumbo = () => (
    <Jumbotron fluid>
        <Container className="inner-jumbo">
            <h3 class="text-center">Built w/ React & Gatsby</h3>
            <p class="text-center font-weight-light">
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
            </p>
        </Container>
    </Jumbotron>
);

export default Jumbo;