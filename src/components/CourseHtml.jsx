import React from 'react'

function CourseHtml() {
  return (
  <div>
      <div className='my-10 grid grid-cols-1 md:grid-cols-2 h-fit md:px-10  font-mont lg:px-16 px-4'>
      <div className='relative'>
        <img src="/image/html.jpg" alt="" className='h-[100%]'/>
        <button className='py-3 px-8 bg-accent rounded absolute top-4 left-4'>Price $30</button>
      </div>
      <div className='bg-secondary p-8'>
        <button className='bg-accent shadow rounded py-2 px-6'>Feauture Courses</button>
        <h1 className='text-2xl font-bold my-3'>HTML5 & CSS For Beginners</h1>
        <p className='leading-relaxed '>Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. Aenean vel congue diam, sed bibendum ipsum. Nunc vulputate aliquet tristique. Integer et pellentesque urna</p>
        <p className='text-accent my-2'>120 student</p>
        <div className='flex items-center gap-2 my-4'>
            <img src="/image/IMG_E4150.jpg" alt="" className='h-20 w-20 rounded-full object-cover'/>
            <p className=''>William Parker, <span className='text-accent'>Developer</span></p>
        </div>
      </div>
    </div>

    <div className='mt-24 grid grid-cols-1 md:grid-cols-2 h-fit md:px-10 font-mont lg:px-16 px-4'>
  {/* Text section */}
  <div className='bg-secondary p-8 order-2 md:order-1'>
    <button className='bg-accent shadow rounded py-2 px-6'>Feature Courses</button>
    <h1 className='text-2xl font-bold my-3'>React Js For Beginners</h1>
    <p className='leading-relaxed'>
      Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. Aenean vel congue diam, sed bibendum ipsum. Nunc vulputate aliquet tristique. Integer et pellentesque urna.
    </p>
    <p className='text-accent my-2'>120 students</p>
    <div className='flex items-center gap-2 my-4'>
      <img src="/image/IMG_E4150.jpg" alt="" className='h-20 w-20 rounded-full object-cover' />
      <p>William Parker, <span className='text-accent'>Developer</span></p>
    </div>
  </div>

  {/* Image section */}
  <div className='relative order-1 md:order-2'>
    <img src="/image/react.png" alt="" className='h-[100%]' />
    <button className='py-3 px-8 bg-accent rounded absolute top-4 left-4'>Price $30</button>
  </div>
</div>

  </div>
  )
}

export default CourseHtml
