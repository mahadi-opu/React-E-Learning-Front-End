import React from 'react';
import'./TopInstructors.css';
import { Col, Container, Row } from 'react-bootstrap';
import CenterModeCarousel from '../../../Elements/CenterModeCarousel/CenterModeCarousel';




const TopInstructors = () => {
    return (
        <div>
            <Container>
                <div className='topInstructorsBackground'>
                    <Row className='my-5'>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className='topInstructor'> <span className='top'>Top </span>Instructor</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <CenterModeCarousel/>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default TopInstructors;