import React from 'react';
import styles from '../../../Assets/CSS/Home/Home.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import BigCourseCard from '../../Elements/Card/BigCourseCard';
import SmallCourseCard from '../../Elements/Card/SmallCourseCard';
import CategorySlider from '../../Elements/Slider/CategorySlider';
import SectionHeadingBtn from '../../Elements/Button/SectionHeadingBtn';
import LoadMore from '../../Elements/Button/LoadMore';




const CourseCategory = () => {
    return (
        <>
            <Container fluid={true}>
                <div className={styles.categorySectionBackground}>
                    <Container>
                        <Row className='my-5'>
                            <Col xs={12} sm={12} md={12}>
                                <SectionHeadingBtn
                                    name="Category"
                                    link="#"
                                />
                            </Col>
                        </Row>
                        <Row className='my-5'>
                            <Col xs={12} sm={12} md={12}>
                                <div className={styles.categorySliderBackground}>
                                    <CategorySlider/>
                                </div>
                            </Col>
                        </Row>

                        <Row className='my-5'>
                            <Col xs={12} sm={6} md={6}>
                                <BigCourseCard
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
                                       <div className={styles.RightSmallCourse}>
                                       <SmallCourseCard
                                            money="200" 
                                            currency="TK." 
                                            btnLabel="BUY NOW" 
                                            courseTitle={'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।'}
                                            instructor="Maruf Hossain"
                                            currencyPosition=""
                                        />
                                       </div>
                                    </Col>

                                    <Col xs={12} sm={6} md={6}> 
                                       <div className={styles.RightSmallCourse}>
                                       <SmallCourseCard
                                            money="200" 
                                            currency="TK." 
                                            btnLabel="BUY NOW" 
                                            courseTitle={'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।'}
                                            instructor="Maruf Hossain"
                                            currencyPosition=""
                                        />
                                       </div>
                                    </Col>

                                    <Col xs={12} sm={6} md={6}> 
                                       <div className={styles.RightSmallCourse}>
                                       <SmallCourseCard
                                            money="200" 
                                            currency="TK." 
                                            btnLabel="BUY NOW" 
                                            courseTitle={'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।'}
                                            instructor="Maruf Hossain"
                                            currencyPosition=""
                                        />
                                       </div>
                                    </Col>

                                    <Col xs={12} sm={6} md={6}> 
                                       <div className={styles.RightSmallCourse}>
                                       <SmallCourseCard
                                            money="200" 
                                            currency="TK." 
                                            btnLabel="BUY NOW" 
                                            courseTitle={'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।'}
                                            instructor="Maruf Hossain"
                                            currencyPosition=""
                                        />
                                       </div>
                                    </Col>

                                </Row>

                                <Row>
                                    <Col>
                                       <div className={styles.LoadMoreButton}>
                                            <LoadMore
                                                name="Load More"
                                                Customurl="#"
                                            />
                                       </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </>
    );
};

export default CourseCategory;