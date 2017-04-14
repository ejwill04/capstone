import React from 'react'
const video = require('./turing-loop-video.mp4') // move url loader into webpack.config

const HeroVideo = () => {
  return(
    <div>
      <video id="turing-video" className="video" loop autoPlay width="100%" >
        <source src={ video } type="video/mp4" />
        Your browser does not support HTML5 video. Here's a <a href="https://www.turing.io/sites/default/files/videos/turing-loop-video.mp4">link</a> to the video.
      </video>
    </div>
  )
}

module.exports = HeroVideo
