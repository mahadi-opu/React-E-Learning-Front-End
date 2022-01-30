import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SingleCourseSmallCard from '../../Elements/SingleCourseSmallCard/SingleCourseSmallCard';

const AllCourses = () => {
    return (
        <div>
            <h2>This is AllCourses Page</h2>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <Row  className='mb-3'>
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



                    <Col xs={12} sm={6} md={6}>
                        <Row  className='mb-3'>
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
        </div>
    );
};

export default AllCourses;