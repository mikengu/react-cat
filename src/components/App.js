import React, { Component } from "react";
import ReactDOM from "react-dom";
import YoutubeSearch from "./youtube_search";
import VideoDetail from "./video_detail";
import { searchTerms } from "./searchTerms";
import { randomNum } from "./randomGenerator";

import api from "../config";
const API_KEY = api.key;

const numOfSearchTerms = searchTerms.length;
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    
    this.videoSearch(searchTerms[randomNum(numOfSearchTerms)]);
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
        <VideoDetail 
        video={this.state.selectedVideo} 
        videoSearch={this.videoSearch}
        />        
      </div>
    );
  }
}

module.exports = App;