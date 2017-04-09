import React from 'react'

const HeroVideo = () => {
  return(
    <div>
      <video id="turing-video" className="video" type="video/mp4" loop autoPlay width="100%" >
        <source src="https://www.turing.io/sites/default/files/videos/turing-loop-video.mp4" />
        Your browser does not support HTML5 video. Here's a <a href="https://www.turing.io/sites/default/files/videos/turing-loop-video.mp4">link</a> to the video.
      </video>
    </div>
  )
}

module.exports = HeroVideo
