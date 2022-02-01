import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from'../../../Assets/CSS/Home/Home.module.css'
import SectionHeadingBtn from '../../Elements/Button/SectionHeadingBtn';
import PopularSlider from '../../Elements/Slider/PopularSlider';



const PopularCourses = () => {
    return (
        <div>
            <Container fluid={true}>
                <div className={styles.PopularSliderBackground} >
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
                                  <PopularSlider/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </div>
    );
};

export default PopularCourses;