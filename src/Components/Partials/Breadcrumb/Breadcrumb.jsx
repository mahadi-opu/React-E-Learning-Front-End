import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import styles from'../../../Assets/CSS/Partials/Breadcrumb.module.css';

const BreadCamp = () => {
    return (
        <>
            <Container fluid={true} className=' m-0 p-0 '>
                <div className={styles.Breadcrumb}>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">
                            Library
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </Container>
        </>
    );
};

export default BreadCamp;