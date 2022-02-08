import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../../Assets/CSS/AllCourses/AllCourses.module.css';
import Filter from '../../Elements/Filter/Filter';
import SmallCourseCard from'../../Elements/Card/SmallCourseCard';
import SeemoreButton from '../../Elements/Button/SeemoreButton';
import ButtonFilter from '../../Elements/Filter/ButtonFilter';

const CourseSection = () => {
    return (
        <>
            <Container fluid={true}>
               <Container>
                   <Row>
                        <Col xs={12} sm={12} md={4}>
                            <div className={styles.filterTop}>   
                                <ButtonFilter/>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={8}>
                        </Col>
                   </Row>
                   <Row>
                        <Col xs={12} sm={12} md={4}>
                            <div className={styles.sideBarLeft}>
                                <Filter/>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={8}>
                            <div className={styles.sideBarRight}>
                                <Row>
                                    <Col xs={12} sm={12} md={4}>
                                        <SmallCourseCard
                                            money="200" 
                                            currency="TK." 
                                            btnLabel="BUY NOW" 
                                            courseTitle={'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।'}
                                            instructor="Maruf Hossain"
                                            currencyPosition=""
                                        />
                                    </Col>
                            
                                    <Col xs={12} sm={12} md={4}>
                                    <SmallCourseCard
                                            money="200" 
                                            currency="TK." 
                                            btnLabel="BUY NOW" 
                                            courseTitle={'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।'}
                                            instructor="Maruf Hossain"
                                            currencyPosition=""
                                        />
                                    </Col>
                            
                                    <Col xs={12} sm={12} md={4}>
                                    <SmallCourseCard
                                            money="200" 
                                            currency="TK." 
                                            btnLabel="BUY NOW" 
                                            courseTitle={'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।'}
                                            instructor="Maruf Hossain"
                                            currencyPosition=""
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} sm={12} md={4}>
                                    <SmallCourseCard
                                            money="200" 
                                            currency="TK." 
                                            btnLabel="BUY NOW" 
                                            courseTitle={'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।'}
                                            instructor="Maruf Hossain"
                                            currencyPosition=""
                                        />
                                    </Col>
                            
                                    <Col xs={12} sm={12} md={4}>
                                        <SmallCourseCard
                                            money="200" 
                                            currency="TK." 
                                            btnLabel="BUY NOW" 
                                            courseTitle={'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।'}
                                            instructor="Maruf Hossain"
                                            currencyPosition=""
                                        />
                                    </Col>
                            
                                    <Col xs={12} sm={12} md={4}>
                                        <SmallCourseCard
                                            money="200" 
                                            currency="TK." 
                                            btnLabel="BUY NOW" 
                                            courseTitle={'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।'}
                                            instructor="Maruf Hossain"
                                            currencyPosition=""
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} sm={12} md={4}>
                                        <SmallCourseCard
                                            money="200" 
                                            currency="TK." 
                                            btnLabel="BUY NOW" 
                                            courseTitle={'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।'}
                                            instructor="Maruf Hossain"
                                            currencyPosition=""
                                        />
                                    </Col>
                            
                                    <Col xs={12} sm={12} md={4}>
                                        <SmallCourseCard
                                            money="200" 
                                            currency="TK." 
                                            btnLabel="BUY NOW" 
                                            courseTitle={'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।'}
                                            instructor="Maruf Hossain"
                                            currencyPosition=""
                                        />
                                    </Col>
                            
                                    <Col xs={12} sm={12} md={4}>
                                        <SmallCourseCard
                                            money="200" 
                                            currency="TK." 
                                            btnLabel="BUY NOW" 
                                            courseTitle={'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।'}
                                            instructor="Maruf Hossain"
                                            currencyPosition=""
                                        />
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