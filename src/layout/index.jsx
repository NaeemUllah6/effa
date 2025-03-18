import React from 'react'
import Header from './header'
import Footer from './footer'
import Body from './body'

const Home = () => {
  return (
    <>
    <div className='fixed top-0 w-full bg-white !z-50'>
    <Header/>
    </div>
    <div className='container'>
    <div className='mt-20 md:mt-[166px]'>
    <Body/>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Home