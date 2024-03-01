import React from 'react'
import "./Video.css"
import Play from '../Play/Play'
import { useParams } from 'react-router-dom'

function Video() {

    const {videoId, categoryId} = useParams();

  return (
    <div className='video-play'>
      <Play videoId = {videoId} categoryId = {categoryId}/>
    </div>
  )
}

export default Video
