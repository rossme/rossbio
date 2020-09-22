import React from 'react';
import { Row, Col, Card } from "react-bootstrap"
import "./card.css"

const Cards = () => (
    <Row className="mb-4">
        <Col sm={6}>
            <Card style={{ border: 'none' }}>
                <Card.Img variant="top" src="https://img.favpng.com/2/11/5/color-geometry-triangle-pattern-png-favpng-t7TkucugG7c4TMHeCiC1E9528.jpg" style={{ opacity: '0.9' }} />
                <Card.Body>
                    <Card.Title>Developers love Cards</Card.Title>
                    <Card.Text>
                    They are everywhere.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                </Card.Body>
            </Card>
        </Col>
        <Col sm={6}>
            <Card style={{ border: 'none' }}>
                <Card.Img variant="top" src="https://res.cloudinary.com/djnfnwxgu/image/upload/v1600809986/rossb/ross_if9cte.png" style={{ opacity: '1' }} />
                <Card.Body>
                    <Card.Title>Page Transitions</Card.Title>
                    <Card.Text>
                    Component-based for easy usage.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    </Row>
);

export default Cards;