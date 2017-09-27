import React, { Component } from "react";
import ReactDOM from "react-dom";
import YoutubeSearch from "./youtube_search";
import VideoDetail from "./video_detail";

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

    const searchTerms = ["cute cat", "cute micro pig video", "fluffy cat", "Maru cat", "chubby cute cat", "cat exercising", "cute kitten", "cute bobtail cat", "aww kitten", "boxes maru", "kitten playing", "adorable cat", "adorable kitten", "surprise kitty", "silly cat", "naughty cat", "bath kitten", "tiny kittens", "cute cat animation", "japanese cat island", "pusheen music"];
    
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