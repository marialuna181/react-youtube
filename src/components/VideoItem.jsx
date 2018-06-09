import React from 'react'

const VideoItem = ({video, changeCurrentVideo}) => {
    const image = video ? video.snippet.thumbnails.default.url : ''
    const title = video ? video.snippet.title : ''
    const description = video ? video.snippet.description: ''
    return(
        <div onClick={()=>changeCurrentVideo(video)} className="div__videoItem">
            <p>{title}</p>
            <img src={image} alt="image"/>
            <p className="p_videoItem_description">{description}</p>
        </div>
    )
}

export default VideoItem