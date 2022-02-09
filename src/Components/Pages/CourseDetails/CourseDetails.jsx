import React from 'react';
import BreadCamp from '../../Partials/Breadcrumb/Breadcrumb';
import Footer from '../../Partials/Footer/Footer';
import Header from '../../Partials/Header/Header';
import MobileHeader from '../../Partials/Header/MobileHeader';
import CourseDetailsBody from './CourseDetailsBody';


const CourseDetails = () => {
    return (
        <>
            <div className="Desktop">
                <Header />
            </div>
            <div className="Mobile">
                <MobileHeader />
            </div>
            <BreadCamp/>
            <CourseDetailsBody/>
            <Footer/>
        </>
    );
};

export default CourseDetails;