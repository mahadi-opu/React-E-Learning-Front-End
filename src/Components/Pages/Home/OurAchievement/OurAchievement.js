import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './OurAchievement.css';
import { HiUserGroup } from 'react-icons/hi';
import { FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';

const OurAchievement = () => {
    return (
        <div>
            <Container>
                <div className='ourAchievementBackground my-5'>
                    <Row className='my-3 align-items-center'>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className='ourAchievement'> Our Achievement</h2>
                        </Col>
                    </Row>
                    <Row className='d-flex align-items-center'>
                        <Col xs={12} sm={12} md={4}>
                            <div class="mx-auto">
                                <div className='userIcon'>
                                    <HiUserGroup/>
                                </div>
                                <div className='user'>
                                    <h2>243</h2>
                                    <h3>Users</h3>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={8}>
                            <Row className='my-5'>
                                <Col xs={12} sm={12} md={6}>
                                   <div className='d-flex'>
                                        <div className='instructorIcon'>
                                            <FaChalkboardTeacher/>
                                        </div>
                                        <div className='instructor'>
                                            <h2>08</h2>
                                            <h3>iNSTRUCTOR</h3>
                                        </div>
                                   </div>
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <div className='d-flex'>
                                            <div className='instructorIcon'>
                                                <FaChalkboardTeacher/>
                                            </div>
                                            <div className='instructor'>
                                                <h2>06</h2>
                                                <h3>COURSE </h3>
                                            </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className='my-5'>
                                <Col xs={12} sm={12} md={6}>
                                    <div className='d-flex'>
                                            <div className='instructorIcon'>
                                                <FaUserGraduate/>
                                            </div>
                                            <div className='instructor'>
                                                <h2>234</h2>
                                                <h3>LEARNERS</h3>
                                            </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <div className='d-flex'>
                                        <div className='instructorIcon'>
                                            <FaChalkboardTeacher/>
                                        </div>
                                        <div className='instructor'>
                                            <h2>1012</h2>
                                            <h3>ENROLMENT</h3>
                                        </div>
                                   </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default OurAchievement;