// USING A SIMPLE JUMBOTRON AS A FOOTER //
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container } from "react-bootstrap"
import "./footer.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
    <Jumbotron fluid style={{ backgroundColor: 'hotpink' }}>
        <Container style={{ padding: '0' }}>
            <div className="inner-footer" >
                <h3 className="text-center">Footer </h3>
                <p className="text-center">Made with a Bootstrap Jumbotron</p>
                <p className="text-center">
                    <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                </p>
            </div>
        </Container>
    </Jumbotron>
);

export default Footer;