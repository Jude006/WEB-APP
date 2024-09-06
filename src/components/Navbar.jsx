import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
    const [showNav,setShowNav] = useState(false)
    
  return (
    <nav className='flex flex-col sticky z-50 top-0 left-0 justify-between items-center bg-primary font-mont py-4 md:py-2 '>
   
   <div className='container mx-auto flex justify-between items-center '>
   <div className='flex flex-col items-center md:ml-0 ml-6'>
       <Link to="/" className='font-bold text-3xl font-mont'><h2>JWeb<span className='text-accent'>Learn</span></h2></Link>
       <h2 className='text-sm'>Learn from the best</h2> 
    </div>

    <div className='md:hidden flex mr-4'>
    <h2 className='text-3xl text-secondary ' onClick={()=>setShowNav(!showNav)}>
      <FontAwesomeIcon icon={faBars} />
    </h2>
    </div>
    <div className='md:flex hidden'>
        <ul className='flex items-center gap-[30px] text-secondary'>
            <li className='hover:text-accent duration-300 ease-linear'><Link to="/">Home</Link></li>
            <li className='hover:text-accent duration-300 ease-linear'><Link to="/About">About Us</Link></li>
            <li className='hover:text-accent duration-300 ease-linear'><Link to="/Courses">Courses</Link></li>
            <li className='hover:text-accent duration-300 ease-linear'><Link to="/News">News</Link></li>
            <li className='hover:text-accent duration-300 ease-linear'><Link to="/Contact">Contact</Link></li>
        </ul>
    </div>
   

    <div className='md:flex hidden'>
       <button className='bg-accent py-2 px-8 rounded-md text-darkGrey font-bold'>Login</button>
    </div>
   </div>
  { showNav && <div className='relative bg-primary flex top-6 z-40 ease-in transition-transform duration-300 transform flex-col justify-start items-start w-full border-t-2 border-secondary py-2'>
        <ul className='absolute bg-primary w-full top-0 left-0 flex flex-col items-start justify-start text-start text-lg  p-6 gap-[30px] text-secondary'>
            <li className='hover:text-accent duration-300 ease-linear' onClick={()=>setShowNav(false)}><Link to="/">Home</Link></li>
            <li className='hover:text-accent duration-300 ease-linear' onClick={()=>setShowNav(false)}><Link to="/About">About Us</Link></li>
            <li className='hover:text-accent duration-300 ease-linear' onClick={()=>setShowNav(false)}><Link to="/Courses">Courses</Link></li>
            <li className='hover:text-accent duration-300 ease-linear' onClick={()=>setShowNav(false)}><Link to="/News">News</Link></li>
            <li className='hover:text-accent duration-300 ease-linear' onClick={()=>setShowNav(false)}><Link to="/Contact">Contact</Link></li>
            <div className='md:hidden flex'>
       <button className='bg-accent py-2 px-10 rounded-sm text-darkGrey font-bold'>Login</button>
    </div>
        </ul>
    </div>}
   </nav>
  )
}

export default Navbar
