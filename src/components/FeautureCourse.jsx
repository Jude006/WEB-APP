import React, { useState } from 'react'
import data2 from '../data2.json'


function FeautureCourse() {
    const[items,setItems] = useState(data2)
    const filterItems = (catItems)=>{
        const updateItems = data2.filter((curItems)=>{
           return curItems.category === catItems
        })
        setItems(updateItems)
    }
  return (
    <div>
      
      <div className='flex flex-col justify-center items-center gap-4 font-roboto'>
        <h1 className='font-lato text-4xl font-bold md:text-5xl '>Feautured Courses</h1>
        <h2 className='font-nunito text-xl font-normal md:text-2xl text-center'>Explore our handpicked selection of top courses designed to elevate <br /> your skills and advance your career</h2>
      </div>
        <div className='font-mont font-semibold grid lg:grid-cols-6 md:grid-cols-2 grid-cols-2 md:flex-wrap lg:flex-row justify-center items-center gap-4 mt-4 md:mt-10 md:px-10  lg:px-14 px-4'>
        <button className='shadow text-darkGrey' onClick={()=>setItems(data2)}>All Courses</button>
        <button className='shadow text-darkGrey' onClick={()=>filterItems("Video Editing")}>Video Editing</button>
        <button className='shadow text-darkGrey' onClick={()=>filterItems("Data Science")}>Data Science</button>
        <button className='shadow text-darkGrey' onClick={()=>filterItems("Graphics Design")}>Graphics</button>
        <button className='shadow text-darkGrey' onClick={()=>filterItems("Web Application")}>Web App</button>
        <button className='shadow text-darkGrey' onClick={()=>filterItems("Web Development")}>Web Dev</button>
        </div>
      <div className='md:px-10  font-mont lg:px-24 px-4 justify-center items-center gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
        {items.map((val)=>(
            <div className='rounded-md shadow-md'>
                <div>
                    <img src={val.courseImage} alt="" className='h-48 bg-red-300 object-cover rounded-t-md w-full'/>
                </div>
                <div className='flex flex-col justify-center items-start gap-2 p-6 bg-secondary border-b border-darkGrey'>
                    <p className='text-darkGrey'>{val.courseName}</p>
                    <p className='text-darkGrey'>{val.description}</p>
                    <p className='text-accent font-semibold'>{val.studentsEnrolled} Students</p>
                </div>
                <div className='bg-secondary p-6 flex flex-row container justify-around items-center'>
            <div>



                <img src={val.instructorImage} alt="" className='w-[80px] object-cover h-[80px] rounded-full bg-primary'/>
            </div>
            <div>
                <p className='text-sm'>{val.instructorName},<span className='text-accent '>Developer</span></p>
            </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default FeautureCourse
