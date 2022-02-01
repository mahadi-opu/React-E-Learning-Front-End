import React from 'react';
import styles from '../../../Assets/CSS/Home/Home.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import CardSlider from '../../Elements/Slider/CardSlider';




const TopInstructors = () => {
    return (
        <Container fluid={true}>
            <div className={`${styles.topInstructorsBG} ${styles.description} my-4`}>
                <Container>
                    <div className={styles.topInstructorsBackground}>
                        <Row className='my-5'>
                            <Col xs={12} sm={12} md={12}>
                                <h2 className={styles.topInstructor}> <span className={styles.top}>Top </span>Instructor</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={12}>
                                <CardSlider/>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </Container>
    );
};

export default TopInstructors;