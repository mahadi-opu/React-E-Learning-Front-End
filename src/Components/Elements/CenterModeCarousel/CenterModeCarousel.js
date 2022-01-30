import React, { Component } from 'react';
import Slider from "react-slick";
import InstructorCard from '../InstructorCard/InstructorCard';
import'./CenterModeCarousel.css';
export default class CenterModeCarousel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      dots: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,
      autoplay: false,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
       
        <Slider {...settings}>
          <div>
            <div className='centerMode'>
                <InstructorCard
                  instructor="Maruf Hossain"
                  instructordesignation={'web developer'}
                  instructorcareer={'pixelcarve Company LTD'}
                  btnLabel="More Info"  
                />
            </div>
            
          </div>
          <div>
          <div className='centerMode'>
                <InstructorCard
                  instructor="Maruf Hossain"
                  instructordesignation={'web developer'}
                  instructorcareer={'pixelcarve Company LTD'}
                  btnLabel="More Info"  
                />
            </div>
          </div>
          <div> 
          <div className='centerMode'>
                <InstructorCard
                  instructor="Maruf Hossain"
                  instructordesignation={'web developer'}
                  instructorcareer={'pixelcarve Company LTD'}
                  btnLabel="More Info"  
                />
            </div>
          </div>
          <div>
          <div className='centerMode'>
                <InstructorCard
                  instructor="Maruf Hossain"
                  instructordesignation={'web developer'}
                  instructorcareer={'pixelcarve Company LTD'}
                  btnLabel="More Info"  
                />
            </div>
          </div>
          <div> 
          <div className='centerMode'>
                <InstructorCard
                  instructor="Maruf Hossain"
                  instructordesignation={'web developer'}
                  instructorcareer={'pixelcarve Company LTD'}
                  btnLabel="More Info"  
                />
            </div>
          </div>
          <div>
          <div className='centerMode'>
                <InstructorCard
                  instructor="Maruf Hossain"
                  instructordesignation={'web developer'}
                  instructorcareer={'pixelcarve Company LTD'}
                  btnLabel="More Info"  
                />
            </div>
            </div>
        </Slider>
      </div>
    );
  }
}