import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../../Assets/CSS/AllCourses/AllCourses.module.css';
import Filter from '../../Elements/Filter/Filter';

const CourseSection = () => {
    return (
        <div>
            <Container fluid={true}>
               <Container>
                   <Row>
                        <Col xs={12} sm={12} md={4}>
                            <div className={styles.Sidebar}>
                                <Filter/>
                            </div>
                       </Col>
                        <Col xs={12} sm={12} md={8}>

                       </Col>
                   </Row>
               </Container>
            </Container>
        </div>
    );
};

export default CourseSection;