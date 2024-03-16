'use client'
import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
interface AudioPlayerProps {
  src: string;
  autoplay?: boolean;
}

const AudioPlayer = ({ src, autoplay = false }: AudioPlayerProps) => {
  return (
    <ReactAudioPlayer
    src={src}
    autoPlay={autoplay}
   controls={true}
  />
  )
}

export default AudioPlayer