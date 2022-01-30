import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CategorySlider from '../../../Elements/CategorySlider/CategorySlider';
import SectionTitle from '../../../Elements/SectionTitle/SectionTitle';

const PopularCourses = () => {
    return (
        <div>
            <Container>
                <Row className='my-5'>
                    <Col xs={12} sm={12} md={12}>
                        <SectionTitle title="Popular Courses"/>
                    </Col>
                </Row>
                
                <Row className='my-5'>
                    <Col xs={12} sm={12} md={12}>
                        <CategorySlider/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PopularCourses;