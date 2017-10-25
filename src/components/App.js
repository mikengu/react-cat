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

    const searchTerms = ["I am maru", "cute micro pig video", "fluffy cat", "Maru cat", "chubby cute cat", "cat exercising", "cute kitten", "cute bobtail cat", "aww adorbable kitten", "boxes maru", "kitten playing", "adorable cat", "adorable kitten", "surprise kitty", "silly cat", "naughty cat", "bath kitten", "tiny kittens", "cat and boxes", "japanese cat island", "milo kitten", "bone fluffy cat", "munchkin baby cat", "tiny kitten meow", "fluffy cat demanding attention"];
    
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