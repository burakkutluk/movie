import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import Popular from './popular/Popular'

const Home = () => {
  return (
    <div className='homeContainer'>
        <HeroBanner/>
        <Popular/>
    </div>
  )
}

export default Home