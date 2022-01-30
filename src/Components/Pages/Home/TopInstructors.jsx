import React from 'react';
import styles from '../../../Assets/CSS/Home/Home.module.css';
import { Col, Container, Row } from 'react-bootstrap';




const TopInstructors = () => {
    return (
        <div>
            <Container>
                <div className={styles.topInstructorsBackground}>
                    <Row className='my-5'>
                        <Col xs={12} sm={12} md={12}>
                            <h2 className={styles.topInstructor}> <span className={styles.top}>Top </span>Instructor</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                          
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default TopInstructors;