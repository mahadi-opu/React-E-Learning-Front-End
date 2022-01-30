import React from 'react';

import Header from '../../Partials/Header/Header';
import MobileHeader from '../../Partials/Header/MobileHeader';
import Banner from './Banner'
import CategorySlider from './CategorySlider';


import OurAchievement from './OurAchievement/OurAchievement';

import PopularCourses from './PopularCourses/PopularCourses';
import TopInstructors from './TopInstructors/TopInstructors';



const Home = () => {
  return (<>

        <div className="Desktop">
          <Header />
        </div>
        <div className="Mobile">
          <MobileHeader />
        </div>
        <Banner/>
        <CategorySlider/>
        <PopularCourses/>
        <TopInstructors/> 
        <OurAchievement/>
  </>);
};

export default Home;
