import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionHeadingBtn from '../../Elements/Button/SectionHeadingBtn';



const PopularCourses = () => {
    return (
        <div>
            <Container>
                <Row className='my-5'>
                    <Col xs={12} sm={12} md={12}> 
                        <SectionHeadingBtn
                            name="Popular Courses"
                            link="#"
                        />
                    </Col>
                      
                </Row>
                
                <Row className='my-5'>
                    <Col xs={12} sm={12} md={12}>
                      
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PopularCourses;