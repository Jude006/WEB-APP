import React ,{useState} from 'react'
import {Link} from 'react-router-dom'
import Button from './Button'

function Footer() {
    const [input,setInput] = useState()
    const update = ()=>{
       window.alert(`Dear distinguished user we have receive your message which is: ${input}`)
    }
    
  return (
  <div className='bg-secondary p-6  text-darkGrey font-mont'>
      <div className='md:px-10  lg:px-24 px-4 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1'>
      <div className='p-6 flex flex-col gap-1 items-start cursor-pointer'>
      <h2 className='font-extrabold text-lg'>Contact Info</h2>
        <p><b>No 1, Idowu Crescent Adalemo</b> bus-stop sango ota ogun state , Nigeria</p>
       <b> <p><Link to="/Contact">08068078495</Link></p></b>
       <strong>E-mail: judeorifa28@gmail.com</strong>
      </div>
      <div className='p-6'>
      <h2 className='font-extrabold text-lg'>Courses</h2>
        <ul className='list-disc cursor-pointer'>
            <li>Web Design</li>
            <li>Web Application</li>
            <li>Data Science</li>
            <li>Video Editing</li>
            <li>Graphics Design</li>
            <li>Machine Learing</li>
        </ul>
      </div>
      <div className='p-6 flex flex-col items-start gap-2'>
        <h2 className='font-extrabold text-lg'>Quick Links</h2>
        <ul className='list-disc cursor-pointer'>
            <li className='hover:text-accent hover:duration-300 hover:ease-in-out hover:underline'><Link to="/">Home</Link></li>
            <li className='hover:text-accent hover:duration-300 hover:ease-in-out hover:underline'><Link to="/About">About</Link></li>
            <li className='hover:text-accent hover:duration-300 hover:ease-in-out hover:underline'><Link to="/Services">Service</Link></li>
            <li className='hover:text-accent hover:duration-300 hover:ease-in-out hover:underline'><Link to="/News">News</Link></li>
            <li className='hover:text-accent hover:duration-300 hover:ease-in-out hover:underline'><Link to="/Contact">Contact</Link></li>
            <li className='hover:text-accent hover:duration-300 hover:ease-in-out hover:underline'><Link to="/Login">Login</Link></li>
        </ul>
      </div>
      <div className='p-6'>
        <ul className='flex flex-col items-start gap-2'>
            <li>Paypal🏧</li>
            <li>Credit card🎴</li>
            <li>Debit Card</li>
            <input type="text" placeholder='Message' className='py-3 px-6 bg-accent bg-opacity-20 rounded-md text-darkGrey focus:outline-none' onChange={(e)=>setInput(e.target.value)}/>
          <Link to="/About"><p onClick={update}>  <Button  type="Send Message" /></p></Link>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Footer
