import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../About.css';
import image from '../img/main-pic.png'

export const About = () => (
    <div id="about">
        <div className="container">
            <Row>
                <Col sm={8} className="description">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm PURPLE.
                        <br className="hidden lg:inline-block" /><h2>This is my page.</h2>
                    </h1>
                </Col>
                <Col sm={4}>
                    <div className="picture">
                        <img src={image}/>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
)