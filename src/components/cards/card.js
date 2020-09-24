import React from 'react';
import { Row, Col, Card } from "react-bootstrap"
import "./card.css"

const Cards = () => (
    <Row className="mb-4">
        <Col sm={6}>
            <Card style={{ border: 'none' }}>
                <Card.Img variant="top" src="https://img.favpng.com/2/11/5/color-geometry-triangle-pattern-png-favpng-t7TkucugG7c4TMHeCiC1E9528.jpg" alt="triangle pattern" style={{ opacity: '0.9' }} />
                <Card.Body>
                    <Card.Title>Developers love Cards</Card.Title>
                    <Card.Text>
                        Pellentesque elit eget gravida cum sociis natoque. Dignissim suspendisse in est ante in nibh mauris.
                    </Card.Text>
                    <div className="card-style">
                        <Card.Link href="#">A Link To Somewhere</Card.Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
        <Col sm={6}>
            <Card style={{ border: 'none' }}>
                <Card.Img variant="top" src="https://res.cloudinary.com/djnfnwxgu/image/upload/v1600809986/rossb/ross_if9cte.png" alt="Ross Buddie" style={{ opacity: '0.9' }} />
                <Card.Body>
                    <Card.Title>Page Transitions</Card.Title>
                    <Card.Text>
                        Purus sit amet luctus venenatis lectus. Integer malesuada nunc vel risus commodo viverra.
                    </Card.Text>
                    <div className="card-style">
                        <Card.Link href="#">Another Card Link</Card.Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    </Row>
);

export default Cards;