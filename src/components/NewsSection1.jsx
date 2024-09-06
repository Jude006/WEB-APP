import React from 'react'
import {Link} from 'react-router-dom'

function NewsSection1() {
  return (
 <div>
       <div className='grid grid-cols-12 font-mont h-fit gap-2 mt-32 lg:px-24 md:px-10 px-6'>
      <div className='md:col-span-8 col-span-12 gap-4 '>
        <div>
            <img src="/image/news1.webp" alt="" className='object-cover brightness-75' />
        </div>
        <div className='mt-8'>
            <h1 className='text-3xl font-bold'>How to create the perfect resume</h1>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-2 items-center gap-4 my-4'>
         <div className='flex   gap-2 items-center'>
            <img src="/image/IMG_E4150.JPG" alt="" className='h-[60px] rounded-full w-[60px] justify-center items-center object-cover'/>
         <p className='border-darkGrey border-r-2 p-2 '>James Smith</p>
         </div>
            <p className='border-darkGrey border-r-2 p-2'>Development</p>
            <p className='border-darkGrey border-r-2 p-2'>June 12, 2018</p>
            <p className='border-darkGrey border-r-2 p-2'>2 Comment</p>
        </div>
        <div className='mt-6'>
            <p>Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. Aenean vel congue diam, sed bibendum ipsum. Nunc vulputate aliquet tristique. Integer et pellentesque urna.</p>
        </div>
        <div className='mt-6'>
            <button className='py-3 px-8 rounded-md text-secondary shadow bg-accent'>Read More</button>
        </div>
      </div>
      <div className='md:col-span-4 col-span-12 shadow md:pl-14 pl-6'>
        <div className='flex items-center justify-between bg-secondary shadow py-3 px-6  md:max-w-[80%]  my-3'>
            <input type="text"  className='focus:outline-none bg-secondary' placeholder='Search'/>
            <span className='text-darkGrey text-xl cursor-pointer'>&#x1F50D;</span>
        </div>
        <div className='mt-16'>
            <h1 className='text-2xl font-bold'>Categories</h1>
            <ul className='flex flex-col gap-2 list-none items-start mt-6'>
                <li>Development</li>
                <li>Web Application</li>
                <li>Press</li>
                <li>Data sscience</li>
                <li>Uncategorized</li>
            </ul>
        </div>
        <div className='mt-16'>
            <h1 className='text-2xl font-bold'>Archives</h1>
            <ul className='flex flex-col gap-2 list-none items-start mt-6'>
                <li>February 2018</li>
                <li>March 2018</li>
                <li>April 2018</li>
                <li>May 2018</li>
                <li>June 2018</li>
            </ul>
        </div>
      </div>
    </div>
    {/* second section  */}

    <div className='grid grid-cols-12 font-mont h-fit gap-2 mt-32 lg:px-24 md:px-10 px-6'>
      <div className='md:col-span-8 col-span-12 gap-4 '>
        <div>
            <img src="/image/web app.jpg" alt="" className='object-cover brightness-75' />
        </div>
        <div className='mt-8'>
            <h1 className='text-3xl font-bold'>5 Tips to make money from home</h1>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-2 items-center gap-4 my-4'>
         <div className='flex gap-2 items-center'>
            <img src="/image/IMG_E4150.JPG" alt="" className='h-[60px] rounded-full w-[60px] justify-center items-center object-cover'/>
         <p className='border-darkGrey border-r-2 p-2 '>James Smith</p>
         </div>
            <p className='border-darkGrey border-r-2 p-2'>Development</p>
            <p className='border-darkGrey border-r-2 p-2'>June 12, 2018</p>
            <p className='border-darkGrey border-r-2 p-2'>2 Comment</p>
        </div>
        <div className='mt-6'>
            <p>Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. Aenean vel congue diam, sed bibendum ipsum. Nunc vulputate aliquet tristique. Integer et pellentesque urna.</p>
        </div>
        <div className='mt-6'>
            <button className='py-3 px-8 rounded-md text-secondary shadow bg-accent'>Read More</button>
        </div>
      </div>
      <div className='md:col-span-4 col-span-12 shadow md:pl-14 pl-6 pr-2'>
     
        <div className='mt-16'>
            <h1 className='text-2xl font-bold'>Archives</h1>
            <ul className='grid lg:grid-cols-2 gap-4 grid-cols-1 list-none items-start mt-6'>
               <button className='bg-secondary shadow-md p-2 text-darkGrey'>Education</button>
                <Link to="/Courses" className='w-full '> <button className='bg-secondary shadow-md p-2 text-darkGrey w-full'>Courses</button></Link>
                 <Link to="/HomeSection1"> <button className='bg-secondary shadow-md p-2 text-darkGrey w-full'>Development</button></Link>
               <button className='bg-secondary shadow-md p-2 text-darkGrey'>Web design</button>
               <button className='bg-secondary shadow-md p-2 text-darkGrey'>online courses</button>
               <button className='bg-secondary shadow-md p-2 text-darkGrey'>Html</button>
            </ul>
        </div>
        <div className='mt-16'>
          <img src="/image/graphics.jpg " className='rounded' alt="" />
        </div>
      </div>
    </div>


    <div className='lg:px-24 md:px-10 px-6 font-mont mt-10 w-fit'>
    <div className='md:col-span-8 col-span-12 gap-4 '>
        <div>
            <img src="/image/online.webp" alt="" className='object-contain brightness-75 max-w-[70%]' />
        </div>
        <div className='mt-8'>
            <h1 className='text-3xl font-bold'>Why choose an online course?</h1>
        </div>
        <div className='grid lg:grid-cols-1 grid-cols-2 items-center gap-4 my-4'>
         <div className='flex gap-2 items-center'>
            <img src="/image/IMG_E4150.JPG" alt="" className='h-[60px] rounded-full w-[60px] justify-center items-center object-cover'/>
         <p className='border-darkGrey border-r-2 p-2 '>James Smith</p>
         </div>
            <p className='border-darkGrey border-r-2 p-2'>Development</p>
            <p className='border-darkGrey border-r-2 p-2'>June 12, 2018</p>
            <p className='border-darkGrey border-r-2 p-2'>2 Comment</p>
        </div>
        <div className='mt-6'>
            <p className='md:max-w-[65%]'>Lorem ipsum dolor sit amet, consectetur. Phasellus sollicitudin et nunc eu efficitur. Sed ligula nulla, molestie quis ligula in, eleifend rhoncus ipsum. Donec ultrices, sem vel efficitur molestie, massa nisl posuere ipsum, ut vulputate mauris ligula a metus. Aenean vel congue diam, sed bibendum ipsum. Nunc vulputate aliquet tristique. Integer et pellentesque urna.</p>
        </div>
        <div className='mt-6'>
            <button className='py-3 px-8 rounded-md text-secondary shadow bg-accent'>Read More</button>
        </div>
      </div>
    </div>
 </div>
  )
}

export default NewsSection1
