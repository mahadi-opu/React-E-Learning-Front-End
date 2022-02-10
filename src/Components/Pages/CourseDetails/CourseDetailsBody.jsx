import React from 'react';
import { Col, Container, Row, Tabs,Tab } from 'react-bootstrap';
import CourseVideo from '../../Elements/Course/CourseVideo';
import styles from '../../../Assets/CSS/Pages/CourseDetails.module.css';
import CustomButton from '../../Elements/Button/CustomButton';
import CourseContent from '../../Elements/Course/CourseContent';
import CourseOverview from '../../Elements/Course/CourseOverview';
import AboutInstructor from '../../Elements/Course/AboutInstructor';
import CourseDetails from '../../Elements/Course/CourseDetails';
import CourseReview from '../../Elements/Course/CourseReview';


const CourseDetailsBody = () => {
    return (
        <>
            <Container fluid={true}>
                <Container>
                    <Row>
                        <Col md={8} sm={12} xs={12}>

                            <div className={styles.courseSidebarLeft}>
                                <div className={styles.courseup}>
                                  
                                   <CourseVideo
                                        videourl={'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'}
                                        courseTitle={'React JS | রিডাক্স | ফায়ারবেজ | রিয়েল লাইফ প্রযেক্ট Job Ready Complete Course'}
                                        instructor="Md. Maruf hossain"
                                    />

                                </div>
                                <div className={styles.courseup}>
                                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                                                
                                            <Tab eventKey="home" title="About Instructor" className={styles.about}>
                                                <AboutInstructor/>   
                                            </Tab>

                                            <Tab eventKey="profile" title="Course Details">
                                                <CourseDetails/>
                                            </Tab>

                                            <Tab eventKey="contact" title="Course Review">
                                                <CourseReview/>
                                            </Tab>
                                                
                                        </Tabs>
                                </div> 
                            </div>
                            
                        </Col>

                        <Col md={4} sm={12} xs={12}>
                            <div className={styles.courseSidebarRight}>
                                <div className={styles.courseWidget}>
                                    <div className={styles.addToCard}>
                                        <CustomButton
                                            name='Add to Card'
                                        />
                                        <CustomButton
                                            name='Buy Now'
                                        />
                                    </div>
                                </div>
                                <div className={styles.courseWidget}>
                                    <div className={styles.courseContent}>
                                        <h2>Course content</h2>
                                    </div>
                                    <CourseContent/>
                                </div>

                                <div className={styles.courseWidget}>
                                   <div className={styles.courseOverview }>
                                        <div className={styles.overviewTitle}>
                                            <h3> Course overview </h3>
                                        </div>
                                            <CourseOverview/>
                                   </div>
                                </div>
                             </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};



export default CourseDetailsBody;