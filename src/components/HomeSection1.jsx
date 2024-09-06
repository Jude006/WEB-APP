import React from 'react';
import data from '../data1.json'

function HomeSection1() {
  return (
    <div>
     <div className='py-16 font-lato'>
  <h1 className='text-4xl md:text-5xl text-center font-semibold text-darkGrey '>Our Courses Category</h1>
  <p className='text-xl text-center text-grey mt-4 font-nunito md:max-w-[100%] max-w-[95%]'>
    Explore a wide range of free online classes designed to help you gain new skills <br /> and advance your career.
  </p>
</div>

            <div className='grid font-mont md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 md:px-10 lg:px-24 px-4 justify-center items-center'>
            {data.map((val)=>(
                <div className='rounded-sm' key={val.id}>
                    <div>
                        <img src={val.image} alt="" className='h-44 w-[100%] bg-cover object-cover'/>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-4 bg-[#f0f0f0] hover:bg-accent hover:bg-opacity-20 duration-300 ease-in-out cursor-pointer p-10'>
                        <div>{val.title}</div>
                        <div>{val.description}</div>
                        <div>{val.totalCoursesAvailable}</div>
                    </div>
                </div>
            ))}
            </div>

    </div>
  )
}

export default HomeSection1
