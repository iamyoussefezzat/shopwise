import React from 'react'
import Hero from './components/Hero'
import Sec2 from './components/Sec2'
import Insta from './components/Insta'
import Founders from './components/Founders'



const page = () => {
  return (
    <div className="body" >
      <Hero/>
      <Sec2/>
      <Insta/>
      <Founders/>
    </div>
  )
}

export default page