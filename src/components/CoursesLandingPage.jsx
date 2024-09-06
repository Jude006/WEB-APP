import React from 'react'
import {Link} from 'react-router-dom'
function CoursesLandingPage() {
  return (
    <div>
     <div className='flex flex-col   md:justify-center items-center relative md:h-[70vh] h-[60vh]' 
  style={{
    backgroundImage: `url('/image/coursesLandingPage.jpg')`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center', // optional, to center the image
  
    width: '100%', // optional, adjust width as needed
   
    objectFit: 'cover'
  }}>

    <div className='font-mont'>
      <h1 className='text-white md:mt-0 mt-10 text-2xl font-semibold lg:ml-24 md:ml-0 ml-4'><Link to="/">Home</Link> /<Link to="/Courses" className='text-accent'>Courses</Link></h1>
    </div>
    <div className='font-mont md:flex hidden flex-col items-center w-full absolute -bottom-14'>
      <button className='bg-secondary text-darkGrey py-3 px-10 font-bold text-xl rounded-t'>Search Your Courses</button>
      <div className='bg-secondary shadow-md py-10 md:w-[80%] rounded  mx-auto flex md:flex-row flex-col gap-4 justify-center'>
        <input type="text" placeholder='Courses ' className='bg-darkGrey text-secondary py-3 px-10 '/>
        <input type="text" placeholder='Category ' className='bg-darkGrey text-secondary py-3 px-10 '/>
       <button className='bg-darkGrey text-secondary py-3 px-10 ' onClick={()=>alert('courses not availabe for now')}>Search Courses</button>
      </div>
    </div>

    <div className='bg-accent md:hidden p-6 rounded w-[95%] left-0 right-0 mx-auto font-mont flex flex-col gap-6 absolute -bottom-28'>
    <h1 className='text-center text-2xl font-bold text-white'>Search Your Course</h1>
    <input type="text" placeholder='Courses' className='bg-secondary text-darkGrey py-4 rounded px-10 '/>
    <input type="text" placeholder='Category' className='bg-secondary text-darkGrey py-4 rounded px-10 '/>
    <button className='bg-darkGrey text-secondary py-4 px-8 rounded-md max-w-[70%]'>Search Course</button>
    </div>

   </div>
    </div>
  )
}

export default CoursesLandingPage
