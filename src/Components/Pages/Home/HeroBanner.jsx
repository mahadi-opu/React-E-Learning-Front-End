import React from 'react';
import styles from '../../../Assets/CSS/Home/Home.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import banner from '../../../Assets/Images/banner-1.png';
import LearnMore from '../../Elements/Button/LearnMore';



const HeroBanner = () => {
    return (
        <>
        <Container fluid={true}>
            <div className={styles.herobackground} >
                <Container >
                    <Row>
                        <Col xs={12} sm={12} md={6} className='d-flex align-items-center'>
                            <div className={styles.bannerText}>
                                <h1>Best E-larning Platform In Bangladesh</h1>
                                <LearnMore
                                    name="Learn More"
                                    Customurl="#"
                                />
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6}>
                            <div className={styles.bannerImage}>
                                <img src={ banner} alt='banner'/>
                            </div>
                        </Col>
                    </Row>
                </Container> 
            </div>
        </Container>
           
        </>
    );
};

export default HeroBanner;