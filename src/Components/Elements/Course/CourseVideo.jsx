import React from 'react';
import { Link } from 'react-router-dom';
import { Player } from 'video-react';
import styles from '../../../Assets/CSS/Course/Course.module.css'

const CourseVideo = (props) => {
    const {
        courseTitle,
        videourl,
        instructor
    } = props;


    return (
        <div className={styles.courseDetailsRawp}>
            <div className={styles.coursevideo}>
                <Player>
                    <source src={videourl} />
                </Player>
            </div>
            <div className={styles.courseTitle}>
                <h3>{courseTitle}</h3>     
            </div>
            <div className={styles.courseInstructor}>
                <h4> Instructor: <Link to=''> {instructor} </Link></h4>
            </div>
        </div>
    );
};

export default CourseVideo;