import React from 'react'

function Form() {
  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <div className='md:p-4'>
      <form onSubmit={handleSubmit} className='bg-white rounded-md p-6 w-full flex flex-col gap-6 shadow-md'>
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
            <button type='submit' className='py-3 px-8 rounded-sm text-white bg-darkGrey mt-4'>Upload Course</button>
        </div>
        <div>
            <button type='submit' className='py-3 px-8 rounded-sm text-white bg-primary mt-4'>Search Course</button>
        </div>
      </form>
    </div>
  )
}

export default Form
