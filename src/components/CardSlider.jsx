import React from 'react'
import data2 from '../data2.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {Link} from 'react-router-dom'
import "slick-carousel/slick/slick-theme.css";

function CardSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            }
          }
        ]
      };
  return (
    <div className='bg-[#f0f0f0] lg:py-12'>
       <div>
      
      <div className='flex flex-col justify-center items-center gap-4 font-roboto'>
        <h1 className='font-lato text-4xl font-bold md:text-5xl '>Feautured Courses</h1>
        <h2 className='font-nunito text-xl font-normal md:text-2xl text-center'>Explore our handpicked selection of top courses designed to elevate <br /> your skills and advance your career</h2>
      </div>
    
      <div className='md:px-10  font-mont lg:px-24 px-4 justify-center items-center md:overflow-auto lg:overflow-x-hidden overflow-hidden mt-10'>
      <Slider {...settings} className='text-black '>
        {data2.map((val,key)=>(
            <div key={key} className='rounded-md shadow-md o'>
                <div className='relative'>
                    <img src={val.courseImage} alt="" className='h-48 bg-red-300 object-cover rounded-t-md w-full'/>
                    <Link to={`/CourseDetail/${encodeURIComponent(val.courseName)}`}><button className='py-3 px-8 bg-accent text-white absolute top-8 rounded-sm left-4'>Read More</button></Link>
                </div>
                <div className='flex flex-col justify-center items-start gap-2 p-6 bg-secondary border-b border-darkGrey'>
                    <p className='text-darkGrey'>{val.courseName}</p>
                    <p className='text-darkGrey'>{val.description}</p>
                    <p className='text-accent font-semibold'>{val.studentsEnrolled} Students</p>
                </div>
                <div className='bg-secondary p-6 flex flex-row container justify-around gap-6  items-center'>
            <div>



                <img src={val.instructorImage} alt="" className='w-[80px] object-cover h-[80px] rounded-full bg-primary'/>
            </div>
            <div>
                <p className='text-sm'>{val.instructorName},<span className='text-accent '>Instructor</span></p>
            </div>
                </div>
            </div>
        ))}
        </Slider>
      </div>
    </div>
    </div>
  )
}

export default CardSlider
