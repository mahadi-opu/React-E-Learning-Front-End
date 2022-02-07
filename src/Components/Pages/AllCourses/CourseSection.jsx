import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../../Assets/CSS/AllCourses/AllCourses.module.css';
import Filter from '../../Elements/Filter/Filter';
import SmallCourseCard from'../../Elements/Card/SmallCourseCard';
import SeemoreButton from '../../Elements/Button/SeemoreButton';

const CourseSection = () => {
    return (
        <>
            <Container fluid={true}>
               <Container>
                   <Row>
                        <Col xs={12} sm={12} md={4}>
                            <div className={styles.sideBar}>
                                <Filter/>
                            </div>
                       </Col>
                        <Col xs={12} sm={12} md={8}>
                            <div className={styles.sideBar}>
                                <Row>
                                    <Col xs={12} sm={12} md={4}>
                                        <SmallCourseCard/>
                                    </Col>
                            
                                    <Col xs={12} sm={12} md={4}>
                                        <SmallCourseCard/>
                                    </Col>
                            
                                    <Col xs={12} sm={12} md={4}>
                                        <SmallCourseCard/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} sm={12} md={4}>
                                        <SmallCourseCard/>
                                    </Col>
                            
                                    <Col xs={12} sm={12} md={4}>
                                        <SmallCourseCard/>
                                    </Col>
                            
                                    <Col xs={12} sm={12} md={4}>
                                        <SmallCourseCard/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} sm={12} md={4}>
                                        <SmallCourseCard/>
                                    </Col>
                            
                                    <Col xs={12} sm={12} md={4}>
                                        <SmallCourseCard/>
                                    </Col>
                            
                                    <Col xs={12} sm={12} md={4}>
                                        <SmallCourseCard/>
                                    </Col>
                                </Row>
                                <Row>
                                    <SeemoreButton/>
                                </Row>
                            </div>
                       </Col>
                   </Row>
               </Container>
            </Container>
        </>
    );
};

export default CourseSection;