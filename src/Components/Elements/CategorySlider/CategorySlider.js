import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './CategorySlider.css';
import Slider from "react-slick";
import SingleCourseSmallCard from '../SingleCourseSmallCard/SingleCourseSmallCard';




// import CategorySliderIcon1 from'./../../../Assets/Images/CategorySlider/1Amar-Skill-Icon1 1.png';
// import CategorySliderIcon2 from'./../../../Assets/Images/CategorySlider/Amar-Skill-Icon2 1.png';
// import CategorySliderIcon3 from'./../../../Assets/Images/CategorySlider/Amar-Skill-Icon3 1.png';
// import CategorySliderIcon4 from'./../../../Assets/Images/CategorySlider/Amar-Skill-Icon4 1.png';
// import CategorySliderIcon5 from'./../../../Assets/Images/CategorySlider/Amar-Skill-Icon2 1.png';



export default class CategorySlider extends Component {
  render() {
    var settings = {
      className:"center",
      centerPadding:"60px",
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <>
           
                <Slider {...settings}>
                    <div >
                        <div className='mx-2'>
                            <SingleCourseSmallCard 
                                money="200" 
                                currency="TK." 
                                btnLabel="BUY NOW" 
                                courseTitle={'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।'}
                                instructor="Maruf Hossain"
                                currencyPosition=""
                            />
                       </div>
                    </div>
                    <div>
                        <div className='mx-2' >
                        <SingleCourseSmallCard 
                                money="200" 
                                currency="TK." 
                                btnLabel="BUY NOW" 
                                courseTitle={'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।'}
                                instructor="Maruf Hossain"
                                currencyPosition=""
                            />
                       </div>
                    </div>
                    <div>
                        <div className='mx-2'>
                        <SingleCourseSmallCard 
                                money="200" 
                                currency="TK." 
                                btnLabel="BUY NOW" 
                                courseTitle={'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।'}
                                instructor="Maruf Hossain"
                                currencyPosition=""
                            />
                       </div>
                    </div>
                    <div>
                        <div className='mx-2'>
                        <SingleCourseSmallCard 
                                money="200" 
                                currency="TK." 
                                btnLabel="BUY NOW" 
                                courseTitle={'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।'}
                                instructor="Maruf Hossain"
                                currencyPosition=""
                            />
                       </div>
                    </div>

                    <div>
                        <div className='mx-2'>
                        <SingleCourseSmallCard 
                                money="200" 
                                currency="TK." 
                                btnLabel="BUY NOW" 
                                courseTitle={'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।'}
                                instructor="Maruf Hossain"
                                currencyPosition=""
                            />
                       </div>
                    </div>
                
                    <div>
                        <div className='mx-2'>
                        <SingleCourseSmallCard 
                                money="200" 
                                currency="TK." 
                                btnLabel="BUY NOW" 
                                courseTitle={'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।'}
                                instructor="Maruf Hossain"
                                currencyPosition=""
                            />
                       </div>
                    </div>
          </Slider>
      </>
    );
  }
}