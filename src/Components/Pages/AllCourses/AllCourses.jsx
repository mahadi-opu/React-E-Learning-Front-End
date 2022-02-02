import React from 'react';
import Header from '../../Partials/Header/Header';
import MobileHeader from '../../Partials/Header/MobileHeader';

const AllCourses = () => {
    return (
        <>
            <div className="Desktop">
                <Header />
            </div>
            <div className="Mobile">
                <MobileHeader />
            </div>
        </>
    );
};

export default AllCourses;