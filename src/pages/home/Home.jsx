import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import Popular from './popular/Popular'
import './home.scss'
import Latest from './latest/Latest'

const Home = () => {
  return (
    <div className='homeContainer'>
        <HeroBanner/>
        <Popular/>
        <Latest/>
    </div>
  )
}

export default Home