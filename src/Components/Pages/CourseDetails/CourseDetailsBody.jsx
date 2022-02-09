import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseVideo from '../../Elements/Course/CourseVideo';
import styles from '../../../Assets/CSS/Pages/CourseDetails.module.css';
import CustomButton from '../../Elements/Button/CustomButton';
import CourseContent from '../../Elements/Course/CourseContent';


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
                                    <CourseVideo
                                        videourl={'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'}
                                        courseTitle={'React JS | রিডাক্স | ফায়ারবেজ | রিয়েল লাইফ প্রযেক্ট Job Ready Complete Course'}
                                        instructor="Md. Maruf hossain"
                                    />
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