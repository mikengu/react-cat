import React, { Component } from "react";
import ReactDOM from "react-dom";
import YoutubeSearch from "./youtube_search";
import VideoDetail from "./video_detail";
import { searchTerms } from "./searchTerms";

import api from "../config";
const API_KEY = api.key;


const randomNum = maxRange => Math.floor(Math.random() * maxRange)

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    
    this.videoSearch(searchTerms[randomNum(searchTerms.length)]);
  }


  videoSearch(term) {
    YoutubeSearch(
      {
        key: API_KEY,
        term: term
      },
      videos => {
        this.setState({
          videos,
          selectedVideo: videos[randomNum(7)]
        });
      }
    );
  }

  render() {
    return (
      <div>        
        <VideoDetail video={this.state.selectedVideo} />        
      </div>
    );
  }
}

module.exports = App;