// USING A SIMPLE JUMBOTRON AS A FOOTER //
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container } from "react-bootstrap"
import "./footer.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
    <Jumbotron fluid className="jumbo-footer">
        <Container style={{ padding: '0' }}>
            <div className="inner-footer">
                <h3 className="text-center">Ross Buddie</h3>
                <div className="text-center" id="social-footer">
                    <p className="text-center"> <a href="http://www.lecocktail.xyz" target="_blank" rel="norefferer">lecocktail.xyz </a> 
                    <a href="https://www.deve.to/" target="_blank" rel="norefferer"> deve.to</a></p>
                    <a href="https://www.github.com/rossme/" target="_blank" rel="norefferer"><FontAwesomeIcon icon={["fab", "github-square"]} size="2x" className="mx-1"/></a>
                    <a href="https://www.linkedin.com/in/rossbuddie/" target="_blank" rel="norefferer"><FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" className="mx-1"/></a>
                </div>
            </div>
        </Container>
    </Jumbotron>
);

export default Footer;