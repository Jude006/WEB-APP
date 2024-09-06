import React from 'react'
import Button from './Button'

function Community() {
  return (
    <div className='flex flex-col py-16  justify-center items-center gap-6  mt-16 md:px-10  font-mont lg:px-24 px-4'>
      <div className='flex justify-center items-center flex-col gap-6 border-b-2 border-accent my-2 w-full p-4'>
        <h1 className='md:text-5xl text-3xl w-full font-bold text-darkGrey text-center'>Join JWebLearn Now </h1>
        <Button type="Register Now"/>
      
      </div>
    </div>
  )
}

export default Community
