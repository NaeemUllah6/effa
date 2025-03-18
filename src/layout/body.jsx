import React from 'react'
import HeroSection from '../components/Body/hero'
import Discover from '../components/Body/discover'
import Workplace from '../components/Body/workplace'
import Host from '../components/Body/host'
import Penalists from '../components/Body/penalists'
import Register from '../components/Body/register'


const Body = () => {
  return (
    <div>
        <HeroSection/>
        <Discover/>
        <Workplace/>
        <Host/>
        <Penalists/>
        <Register/>
    </div>
  )
}

export default Body