import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import styles from'../../../Assets/CSS/Partials/Breadcrumb.module.css';

const BreadCamp = () => {
    return (
        <>
            <Container fluid={true} className=' m-0 p-0 '>
                <div className={styles.Breadcrumb}>
                    <div className={styles.breadCampPageTitle}>
                        <h2><span> All </span> Courses </h2>
                    </div>
                    <div className={styles.breadCampPagelink}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>All  Course</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>  
                </div>
            </Container>
        </>
    );
};

export default BreadCamp;