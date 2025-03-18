import React from 'react'
import Heading from '../../ui/heading'
const Discover = () => {
  return (
    <div className='max-w-[1104px] mx-auto py-2 lg:py-12'>
        <div className='bg-[#121212] rounded-3xl p-4 md:p-12 flex flex-col items-center before relative'>
            <h4 className='text-[20px] font-semibold fontArchivo text-white text-center'>Sorry, that’s not currently available.</h4>
            <p className='mt-2 md:mt-4 text-base font-normal fontArchivo text-white'>
            Luckily, lots of other stuff is
            </p>
            <button className='bg-white cursor-pointer hover:bg-[#FFA830] transition-all hover:text-white duration-500 rounded-full px-8 py-2 md:py-5 font-bold fontArchivo mt-14 w-full md:w-fit'>Discover More</button>
        </div>
    </div>
  )
}

export default Discover