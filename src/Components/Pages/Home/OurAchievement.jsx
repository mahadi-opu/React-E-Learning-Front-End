import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../../Assets/CSS/Home/Home.module.css';
import { HiUserGroup } from 'react-icons/hi';
import { FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';



const OurAchievement = () => {
    return (
        <Container fluid={true}>
            <div className={styles.topBgCircel}></div>
            <Container>
                <div className={styles.ourAchievementBackground}>
                    <Row className='d-flex align-items-center'>
                        <Col xs={12} sm={12} md={12}>
                            <div className={styles.ourAchievement}>
                                <h2> Our Achievement</h2>
                            </div>
                            
                        </Col>
                    </Row>
                    <Row className='d-flex align-items-center'>
                        <Col xs={12} sm={12} md={4}>
                            <div class="mx-auto">
                                <div className={styles.userIcon}>
                                    <HiUserGroup/>
                                </div>
                                <div className={styles.user}>
                                    <h2>243</h2>
                                    <h3>Users</h3>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={8}>
                            <Row>
                                <Col xs={12} sm={12} md={6}>
                                    <div className={styles.instructorRawp}>
                                            <div className={styles.instructorIcon}>
                                                <FaChalkboardTeacher/>
                                            </div>
                                            <div className={styles.instructor}>
                                                <h2>08</h2>
                                                <h3>iNSTRUCTOR</h3>
                                            </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <div className={styles.instructorRawp}>
                                            <div className={styles.instructorIcon}>
                                                <FaChalkboardTeacher/>
                                            </div>
                                            <div className={styles.instructor}>
                                                <h2>06</h2>
                                                <h3>COURSE </h3>
                                            </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12} sm={12} md={6}>
                                    <div className={styles.instructorRawp}>
                                            <div className={styles.instructorIcon}>
                                                <FaUserGraduate/>
                                            </div>
                                            <div className={styles.instructor}>
                                                <h2>234</h2>
                                                <h3>LEARNERS</h3>
                                            </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <div className={styles.instructorRawp}>
                                        <div className={styles.instructorIcon}>
                                            <FaChalkboardTeacher/>
                                        </div>
                                        <div className={styles.instructor}>
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
            <div className={styles.leftBgCarcel}></div>  
        </Container>
    );
};

export default OurAchievement;