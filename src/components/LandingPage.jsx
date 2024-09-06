import React, { useState } from 'react'
// import Button from './Button'
import Typewriter from 'react-typewriter-effect';

function LandingPage() {
 

  const [input,setInput] = useState({Name: "", Email: ""})

  const click = ()=>{
    alert(`Dear amazing user your name is ${input.Name}  and your gmail is ${input.Email} `)
  }

  return (
    <div>
    <div 
  style={{
    backgroundImage: `url('/image/Landing page.jpg')`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center', // optional, to center the image
  
    width: '100%', // optional, adjust width as needed
  }}
 className='bg-cover md:h-[90vh] h-fit md:py-0 py-6 bg-center flex flex-col justify-center text-secondary gap-6 items-center font-nunito'>
        <h1 className='font-extrabold text-5xl  capitalize text-center'>Get the best free online web courses</h1>
      
        <h2 className='font-bold text-2xl md:text-3xl capitalize text-center md:max-w-[80%] max-w-[90%]'>
        <Typewriter
        textStyle={{
    
          textAlign: 'center',
         
        }}
        startDelay={1000}
        cursorColor="#f0f0f0"
        multiText={[
          'Unlock your potential with interactive lessons and hands-on projects \ndesigned to boost your skills and career.',
          'Empower your journey with expert-led courses and real-world projects, tailored \nto elevate your expertise and professional growth.',
          'Transform your future with cutting-edge courses and immersive learning experiences\n that drive success and innovation',
        ]}
        multiTextDelay={5000}
        typeSpeed={100}
        multiTextLoop
      />
        </h2>
        <div className='flex md:flex-wrap  font-bold justify-center items-center gap-8 md:flex-row flex-col  mt-6'>
            <div>
                <input type="text" placeholder='Name' className='py-3 px-16  bg-white focus:outline-none text-darkGrey' value={input.Name} onChange={(e)=>setInput({...input,Name:e.target.value})}/>
            </div>
            <div>
           { <input type="text" placeholder='Email' className='py-3 px-16 focus:outline-none  bg-white text-darkGrey capitalize' value={input.Email} onChange={(e)=>setInput({...input,Email:e.target.value})}/>}
            </div>
            <div>
                {/* <Button type="Sign Up Now" /> */}
                <button className='py-3 px-8 bg-accent rounded-sm text-darkGrey' onClick={click}>Sign Up Now</button>
            </div>
        </div>
</div>
    </div>
  )
}

export default LandingPage
