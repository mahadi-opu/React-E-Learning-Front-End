import React from 'react';
import BreadCrub from '../../Partials/Breadcrumb/Breadcrumb';
import Footer from '../../Partials/Footer/Footer';
import Header from '../../Partials/Header/Header';
import MobileHeader from '../../Partials/Header/MobileHeader';
import CourseSection from './CourseSection';

const AllCourses = () => {
    return (
        <>
            <div className="Desktop">
                <Header />
            </div>
            <div className="Mobile">
                <MobileHeader />
            </div>
            <BreadCrub/>
            <CourseSection/>
            <Footer/>
        </>
    );
};

export default AllCourses;