import React from 'react'
import CoursesLandingPage from './CoursesLandingPage'
import FeautureCourse from './FeautureCourse'
import CourseHtml from './CourseHtml'
import Footer from './Footer'
import Community from './Community'

function Courses() {
  return (
    <div>
      <CoursesLandingPage />
     <div className='md:mt-28 mt-36 md:px-14 py-8'>
     <FeautureCourse />
     <CourseHtml />
     
     </div>
     <Community />
     <Footer/>
    </div>
  )
}

export default Courses
