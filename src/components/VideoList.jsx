import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos,changeCurrentVideo}) =>
    <div className="div__videoList">
        {videos.map((video, index)=>(
            <VideoItem key={index} video={video} changeCurrentVideo={changeCurrentVideo} />
        ))}
    </div>

export default VideoList