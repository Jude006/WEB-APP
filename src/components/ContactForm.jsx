import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

function ContactForm() {
  return (  
    <div className='lg:px-24 font-mont md:px-10 px-6 gap-2 md:mt-28 h-fit mt-36 grid  grid-cols-12 '>
      <div className='lg:col-span-8 col-span-12 md:px-16 lg:py-8 '>
        <div>
          <h1 className='text-5xl font-bold '>Get In Touch</h1>
        </div>
        <div className='mt-4'>
          <p className='m-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.</p>
        </div>
        <div className='md:p-4 mt-8'>
      <form className='bg-white rounded-md p-6 w-full flex flex-col gap-6 shadow-md'>
        <div>
            <input required type="text" placeholder='Your-Name' className='py-3 font-semibold px-8 w-full bg-accent bg-opacity-25' />
        </div>
        <div>
            <input required type="email" placeholder='Your-Email' className='py-3 font-semibold px-8 w-full bg-accent bg-opacity-25'/>
        </div>
        <div>
            <input required type="number" placeholder='Your-Phone' className='py-3 font-semibold px-8 w-full bg-accent bg-opacity-25'/>
        </div>
        <div>
           <input type="text"  placeholder='Message' className='lg:py-20 py-10 px-8 w-full bg-accent bg-opacity-25'/>
        </div>
        <div>
            <button type='submit' className='py-3 px-8 rounded-sm text-white bg-primary mt-4'>Send Message</button>
        </div>
      </form>
    </div>
      </div>
      <div className='lg:col-span-4 py-6 px-10 col-span-12 '>
        <div>
          <p className='md:text-3xl text-xl font-bold uppercase'>Contact Info</p>
        </div>
        <div className='mt-4'>
          <p className='font-light'>Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendi sse cursus faucibus finibus.</p>
        </div>
        <div className='mt-16'>
          <p className='text-xl text-accent '>Direct Line</p>
        </div>
        <div className='mt-4'>
          <p className='text-3xl border-b border-accent'>+53 345 7953 32453</p>
        </div>
        <div>
          <ul className='flex flex-col gap-3 list-disc text-sm mt-10 text-justify'>
            <li>1481 Creekside Lane
            Avila Beach, CA 931</li>
            <li>+53 345 7953 32453</li>
            <li>yourmail@gmail.com</li>
          </ul>
        </div>
        <div className="flex space-x-4 text-darkGrey mt-10">
      <Link to="#" className="hover:text-primary">
        <FontAwesomeIcon icon={faFacebookF} />
      </Link>
      <Link to="#" className="hover:text-primary">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
      <Link to="#" className="hover:text-primary">
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
      <Link to="#" className="hover:text-primary">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Link>
      <Link to="#" className="hover:text-primary">
        <FontAwesomeIcon icon={faYoutube} />
      </Link>
      <Link to="#" className="hover:text-primary">
        <FontAwesomeIcon icon={faPinterest} />
      </Link>
    </div>
      </div>
    </div>
  )
}

export default ContactForm
