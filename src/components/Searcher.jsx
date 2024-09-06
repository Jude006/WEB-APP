import React from 'react'
import Button from './Button'

function Searcher() {
  return (
   <div className=' md:px-10 lg:px-24 px-4 font-lato'>
     <div className='bg-secondary p-2  md:p-8 shadow-md'>
      <h1 className='text-darkGrey font-bold text-4xl md:text-6xl text-center'>Search Your Course</h1>
      <div className='bg-primary bg-opacity-25 w-full py-10 px-6 my-6 text-xl font-mont font-semibold flex justify-center items-center text-darkGrey md:flex-wrap lg:flex-row flex-col gap-6'>
        <input type="text" placeholder='Course' className='bg-secondary py-3 px-10 focus:outline-none focus:border-b-2 border-accent w-full md:w-fit'/>
        <input type="text" placeholder='Category' className='bg-secondary py-3 px-10 focus:outline-none focus:border-b-2 border-accent md:w-fit w-full'/>
        <Button type="Search Course"/>
      </div>
      </div>
   </div>
  )
}

export default Searcher
