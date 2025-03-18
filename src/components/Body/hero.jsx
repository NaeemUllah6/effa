import React from 'react'
import HeroImg from '../../assets/images/img5.png'
import Button from '../../ui/button'
const Hero = () => {
  return (
    <>
     <div className='my-6 md:my-12'>
     <div className=' max-w-[928px] mx-auto'>
        <h2 className='text-2xl md:text-[48px] text-center font-normal leading-[106%] fontArchivo text-[#4C525B]'>Job Ready Executive Roundtable</h2>
        <p className='mt-4 md:mt-8 fontArchivo text-[#4C525B] font-base text-center'>
          Equipping the Next Generation for Success in the Age of AI
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-6 md:mt-12 items-center justify-between gap-5 max-w-[1104px] mx-auto'>
        <div>
          <img className='' src={HeroImg} alt="" />
        </div>
        <div className='max-w-[377px]'>
          <h3 className='text-[#4C525B] text-3xl md:text-[32px] font-light'>Watch the Roundtable</h3>
          <p className='mt-2 md:mt-4 text-[#4C525B] font-normal fontArchivo text-base '>
            The full roundtable discussion will be available where you enjoy Job Ready on YouTube, Apple Podcasts, Spotify, and right here at effa.io/executiveroundtable on Monday, March 31st.
          </p>
          <Button className='bg-[#052043] text-white border-none mt-4 md:mt-8 w-full md:w-fit'>
            Register Here
          </Button>
        </div>
      </div>
     </div>
    </>
  )
}

export default Hero