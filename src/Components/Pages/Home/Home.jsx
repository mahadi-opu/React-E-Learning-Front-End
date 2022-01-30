import React from 'react';

import Footer from '../../Partials/Footer/Footer';

import Header from '../../Partials/Header/Header';
import MobileHeader from '../../Partials/Header/MobileHeader';


import HeroBanner from './HeroBanner';
import CourseCategory from './CourseCategory';
import PopularCourses from './PopularCourses';
import TopInstructors from './TopInstructors';
import OurAchievement from './OurAchievement';





const Home = () => {
  return (<>
        <div className="Desktop">
          <Header />
        </div>
        <div className="Mobile">
          <MobileHeader />
        </div>
          <HeroBanner/>
          <CourseCategory/>
          <PopularCourses/>
          <TopInstructors/>
          <OurAchievement/>
          <Footer/>
  </>);
};

export default Home;
