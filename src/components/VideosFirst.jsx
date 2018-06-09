import React from 'react'

const VideosFirst = ({currentVideo}) => {
    const youtube = 'https://www.youtube.com/embed/'
    const videoURL = currentVideo? youtube+currentVideo.id.videoId : youtube+currentVideo
    const title = currentVideo? currentVideo.snippet.title:''
    const description = currentVideo? currentVideo.snippet.description: ''

    return(
        <div className="div__youtube">
            <iframe className="iframe_youtube" src={videoURL} title="video"></iframe>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default VideosFirst