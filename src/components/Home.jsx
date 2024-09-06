import React from 'react'
import LandingPage from './LandingPage'
import HomeSection1 from './HomeSection1'
import Searcher from './Searcher'
import CardSlider from './CardSlider'
import SignUp from './SignUp'
import Community from './Community'
import Footer from './Footer'
import Nvbar from './Nvbar'

// import FeautureCourse from './FeautureCourse'


function Home() {
  return (
  <>
    <LandingPage />
    <HomeSection1 />
    <div className='md:my-10 my-6'>
    <Searcher />
    </div>
    <div className='md:my-14 my-4'>
    {/* <FeautureCourse /> */}
    <CardSlider />
    <SignUp />
   
    </div>
   <div className='py-2'>
   <Community />
   </div>
   <Footer />
<Nvbar />
  </>
  )
}

export default Home
