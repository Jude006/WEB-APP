import React from 'react'
import Form from './Form'

function SignUp() {
  return (
    <div className='mt-4 md:mt-10 md:px-10  lg:px-24 px-4 grid md:grid-cols-2 font-mont grid-cols-1'>
      <div className='bg-secondary px-4 md:px-14 py-4 md:py-10 flex flex-col justify-center items-center'>
      <div>
    <h1 className='text-3xl md:text-4xl font-bold text-center text-darkGrey leading-relaxed'>Sign up to become a student in JWebLearn</h1>
    <h2 className='text-xl font-normal text-center text-darkGrey mt-4'>
        Join a community of passionate learners and start your journey towards mastering new skills and advancing your career.
    </h2>
</div>
        <div className='w-full mt-4'>
            <Form />
        </div>


      </div>
      <div className='bg-red-600 object-cover'  style={{
    backgroundImage: `url('/image/sign.jpg')`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center', // optional, to center the image
  
    width: '100%', // optional, adjust width as needed
  }}>

      </div>
    </div>
  )
}

export default SignUp
