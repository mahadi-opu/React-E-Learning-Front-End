import React from 'react';
import './Category.css';
import { Col, Container, Row } from 'react-bootstrap';
import CategorySlider from '../../Elements/CategorySlider/CategorySlider';
import SectionTitle from '../../Elements/SectionTitle/SectionTitle';
import SingleCourseBigCard from '../../Elements/SingleCourseBigCard/SingleCourseBigCard';
import SingleCourseSmallCard from '../../Elements/SingleCourseSmallCard/SingleCourseSmallCard';



const Category = () => {
    return (
        <>
            <Container>
                <Row className='my-5'>
                    <Col xs={12} sm={12} md={12}>
                        <SectionTitle title="Category"/>
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col>
                        <div className='categoryBackground' xs={12} sm={6} md={6}>
                            <CategorySlider/>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <SingleCourseBigCard
                            money="200" 
                            currency="TK." 
                            btnLabel="BUY NOW" 
                            courseTitle={'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।'}
                            instructor="Maruf Hossain"
                            currencyPosition=""
                        />
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <Row>
                            <Col xs={12} sm={6} md={6}> 
                                <SingleCourseSmallCard
                                    money="200" 
                                    currency="TK." 
                                    btnLabel="BUY NOW" 
                                    courseTitle={'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।'}
                                    instructor="Maruf Hossain"
                                    currencyPosition=""
                                />
                            </Col>
                            <Col xs={12} sm={6} md={6}> 
                                <SingleCourseSmallCard
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
                            <Col xs={12} sm={6} md={6}> 
                                <SingleCourseSmallCard
                                    money="200" 
                                    currency="TK." 
                                    btnLabel="BUY NOW" 
                                    courseTitle={'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।'}
                                    instructor="Maruf Hossain"
                                    currencyPosition=""
                                />
                            </Col>
                            <Col xs={12} sm={6} md={6}> 
                                <SingleCourseSmallCard
                                    money="200" 
                                    currency="TK." 
                                    btnLabel="BUY NOW" 
                                    courseTitle={'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।'}
                                    instructor="Maruf Hossain"
                                    currencyPosition=""
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Category;