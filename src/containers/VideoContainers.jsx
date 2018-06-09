import React, {Component} from 'react'
import SearchContainer from './SearchContainer'
import Buttons from '../components/Buttons'
import VideosFirst from '../components/VideosFirst'
import VideoList from '../components/VideoList'
import search from 'youtube-api-v3-search'

export default class VideoContainer extends Component{
    state = {
        videos:[],
        currentVideo:null,
        search:'perritos'
    }


    componentDidMount(){
        this.callVideos('')
    }

    callVideos=(value)=>{
        const youtubeAPI = 'AIzaSyArV40E2RjP7Y1dxExmDxpp3mkve7sEVww'
        const opts = {q:value, type:'videos'}
        search(youtubeAPI, opts).then((data)=>{
            const videos = data.items
            console.log(videos)
            this.setState({videos, currentVideo:videos[0]})
        }).catch(err=>{
            console.log(err)
        })
    }

    handlerChangeSearch = (e) => {
        this.setState({search: e.target.value},()=>{
            this.callVideos(this.state.search)
        })
    }

    handlerClearSearch = () => {
        this.setState({search:''},()=>{
            this.callVideos(this.state.search)
        })
    }

    changeCurrentVideo = (value) =>{
        this.setState({
            currentVideo: value
        })
    }

    
    render(){
        console.log(this.state.currentVideo)
        return(
            
            <div>
                <div>
                    <SearchContainer search={this.state.search} handlerChangeSearch={this.handlerChangeSearch} />
                    <Buttons handlerClearSearch={this.handlerClearSearch} />
                </div>
                <div>
                    <div className="container__div_videoFirst" >
                        <VideosFirst {...this.state} />
                    </div>
                    <div className="container__div_videoList">
                        <VideoList videos={this.state.videos} changeCurrentVideo={this.changeCurrentVideo} />
                    </div>
                </div>

            </div>
        )
    }
}