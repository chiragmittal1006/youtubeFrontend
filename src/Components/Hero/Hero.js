import React, { useState } from 'react'
import "./Hero.css"
import Sidebar from "../Sidebar/Sidebar"
import Feed from '../Feed/Feed'

function Hero({ sidebar }) {

  const [category, setcategory] = useState(0)

  return (
    <div className='hero'>
        <Sidebar sidebar={sidebar} category={category} setcategory = {setcategory}/>
        <div className={`hero-container ${sidebar?"":"hero-large-container"}`}>
            <Feed category={category}/>
        </div>
    </div>
  )
}

export default Hero

